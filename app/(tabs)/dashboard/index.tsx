import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useMemo } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, {
  Circle,
  Defs,
  Stop,
  LinearGradient as SvgGrad,
} from "react-native-svg";

const { width: SCREEN_W } = Dimensions.get("window");

// ── Helpers ──────────────────────────────────────────────────────────

function calcBMR(w: number, h: number, a: number, g: string) {
  const base = 10 * w + 6.25 * h - 5 * a;
  return Math.round(g === "Female" ? base - 161 : base + 5);
}

const ACT: Record<string, number> = { low: 1.2, moderate: 1.55, high: 1.9 };

function calcTDEE(bmr: number, level: string) {
  return Math.round(bmr * (ACT[level] ?? 1.2));
}

function calcMacros(cal: number) {
  return {
    protein: Math.round((cal * 0.3) / 4),
    carbs: Math.round((cal * 0.4) / 4),
    fat: Math.round((cal * 0.3) / 9),
  };
}

// ── Gradient Ring ────────────────────────────────────────────────────

function GradientRing({
  size,
  stroke,
  progress,
  from,
  to,
}: {
  size: number;
  stroke: number;
  progress: number;
  from: string;
  to: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - Math.min(progress, 1));

  return (
    <Svg
      width={size}
      height={size}
      style={{ transform: [{ rotate: "-90deg" }] }}
    >
      <Defs>
        <SvgGrad id="ringGrad" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" stopColor={from} />
          <Stop offset="100%" stopColor={to} />
        </SvgGrad>
      </Defs>
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="rgba(255,255,255,0.04)"
        strokeWidth={stroke}
        fill="none"
      />
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="url(#ringGrad)"
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={off}
        strokeLinecap="round"
      />
    </Svg>
  );
}

// ── Mini Ring ────────────────────────────────────────────────────────

function MiniRing({
  size,
  stroke,
  progress,
  color,
}: {
  size: number;
  stroke: number;
  progress: number;
  color: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - Math.min(progress, 1));
  return (
    <Svg
      width={size}
      height={size}
      style={{ transform: [{ rotate: "-90deg" }] }}
    >
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={stroke}
        fill="none"
      />
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke={color}
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={off}
        strokeLinecap="round"
      />
    </Svg>
  );
}

// ── Macro Ring Item ──────────────────────────────────────────────────

function MacroRingItem({
  label,
  current,
  goal,
  unit,
  color,
}: {
  label: string;
  current: number;
  goal: number;
  unit: string;
  color: string;
}) {
  const pct = goal > 0 ? Math.min(current / goal, 1) : 0;
  return (
    <View className="items-center flex-1">
      <View
        style={{ width: 56, height: 56 }}
        className="items-center justify-center"
      >
        <MiniRing size={56} stroke={5} progress={pct} color={color} />
        <Text className="absolute text-text-primary text-xs font-bold">
          {Math.round(pct * 100)}%
        </Text>
      </View>
      <Text className="text-text-primary text-sm font-semibold mt-2">
        {current}
        <Text className="text-text-muted font-normal text-xs">
          {" "}
          / {goal}
          {unit}
        </Text>
      </Text>
      <Text className="text-text-muted text-[11px] mt-0.5">{label}</Text>
    </View>
  );
}

// ── Dashboard ────────────────────────────────────────────────────────

export default function DashboardScreen() {
  const router = useRouter();

  const profile = {
    name: "Mohamed",
    weight: 80,
    height: 178,
    age: 25,
    gender: "Male" as const,
    activityLevel: "moderate",
    goal: "cut",
    targetCalories: 0,
  };

  const consumed = { calories: 1240, protein: 82, carbs: 130, fat: 38 };

  const { bmr, tdee, dailyCalories, macros } = useMemo(() => {
    const bmr = calcBMR(
      profile.weight,
      profile.height,
      profile.age,
      profile.gender,
    );
    const tdee = calcTDEE(bmr, profile.activityLevel);
    let dc = profile.targetCalories || tdee;
    if (profile.goal === "cut") dc = Math.round(tdee * 0.8);
    else if (profile.goal === "bulk") dc = Math.round(tdee * 1.15);
    return { bmr, tdee, dailyCalories: dc, macros: calcMacros(dc) };
  }, [profile]);

  const pct =
    dailyCalories > 0 ? Math.min(consumed.calories / dailyCalories, 1) : 0;
  const remaining = Math.max(dailyCalories - consumed.calories, 0);
  const over = consumed.calories > dailyCalories;

  return (
    <LinearGradient colors={["#0B0F14", "#151A21"]} className="flex-1">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header ──────────────────────────────────────────── */}
        <View className="flex-row items-end justify-between px-5 pt-14 pb-2">
          <View>
            <Text className="text-gray-500 text-sm tracking-wide">
              Good day
            </Text>
            <Text className="text-white text-2xl font-bold tracking-tight mt-0.5">
              {profile.name}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/reminders" as any)}
            className="w-10 h-10 rounded-xl bg-white/5 items-center justify-center"
            activeOpacity={0.7}
          >
            <MaterialIcons
              name="notifications-none"
              size={20}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        </View>

        {/* ── Calorie Card ────────────────────────────────────── */}
        <View className="mx-5 mt-4 rounded-3xl overflow-hidden">
          <LinearGradient
            colors={["#1C2127", "#151A21"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="p-6"
            style={{
              borderRadius: 24,
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.04)",
            }}
          >
            {/* Ring */}
            <View className="items-center">
              <View
                style={{ width: 180, height: 180 }}
                className="items-center justify-center"
              >
                <GradientRing
                  size={180}
                  stroke={14}
                  progress={pct}
                  from={over ? "#F87171" : "#22C55E"}
                  to={over ? "#EF4444" : "#4ADE80"}
                />
                <View className="absolute items-center">
                  <Text className="text-white text-4xl font-roboto tracking-tight">
                    {consumed.calories}
                  </Text>
                  <Text className="text-gray-400 text-xs mt-1">
                    of {dailyCalories} kcal
                  </Text>
                </View>
              </View>
            </View>

            {/* Stats row */}
            <View className="flex-row mt-6 bg-white/[0.03] rounded-2xl py-3 px-2">
              <View className="flex-1 items-center">
                <Text className="text-gray-500 text-[10px] font-medium uppercase tracking-widest">
                  Eaten
                </Text>
                <Text className="text-white text-base font-bold mt-1">
                  {consumed.calories}
                </Text>
              </View>
              <View className="w-px bg-white/[0.06]" />
              <View className="flex-1 items-center">
                <Text className="text-gray-500 text-[10px] font-medium uppercase tracking-widest">
                  Remaining
                </Text>
                <Text
                  className="text-base font-bold mt-1"
                  style={{ color: over ? "#F87171" : "#4ADE80" }}
                >
                  {over ? "+" : ""}
                  {over ? consumed.calories - dailyCalories : remaining}
                </Text>
              </View>
              <View className="w-px bg-white/[0.06]" />
              <View className="flex-1 items-center">
                <Text className="text-gray-500 text-[10px] font-medium uppercase tracking-widest">
                  Target
                </Text>
                <Text className="text-white text-base font-bold mt-1">
                  {dailyCalories}
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* ── Add Meal ────────────────────────────────────────── */}
        <TouchableOpacity
          className="mx-5 mt-4 rounded-2xl overflow-hidden"
          activeOpacity={0.85}
          onPress={() => router.push("/(tabs)/log" as any)}
        >
          <LinearGradient
            colors={["#22C55E", "#4ADE80"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="flex-row items-center justify-center py-3.5"
            style={{ borderRadius: 16 }}
          >
            <MaterialIcons name="add" size={20} color="#0B0F14" />
            <Text className="text-[#0B0F14] text-sm font-bold ml-1.5 tracking-wide">
              Log a Meal
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* ── Macros ──────────────────────────────────────────── */}
        <View
          className="mx-5 mt-5 bg-white/[0.03] rounded-3xl p-5"
          style={{ borderWidth: 1, borderColor: "rgba(255,255,255,0.04)" }}
        >
          <Text className="text-gray-500 text-[10px] font-semibold uppercase tracking-widest mb-4">
            Macros
          </Text>
          <View className="flex-row">
            <MacroRingItem
              label="Protein"
              current={consumed.protein}
              goal={macros.protein}
              unit="g"
              color="#22D3EE"
            />
            <MacroRingItem
              label="Carbs"
              current={consumed.carbs}
              goal={macros.carbs}
              unit="g"
              color="#FACC15"
            />
            <MacroRingItem
              label="Fat"
              current={consumed.fat}
              goal={macros.fat}
              unit="g"
              color="#F87171"
            />
          </View>
        </View>

        {/* ── BMR / TDEE ──────────────────────────────────────── */}
        <View className="flex-row mx-5 mt-4 gap-3">
          <View
            className="flex-1 bg-white/[0.03] rounded-2xl p-4"
            style={{ borderWidth: 1, borderColor: "rgba(255,255,255,0.04)" }}
          >
            <Text className="text-gray-500 text-[10px] font-semibold uppercase tracking-widest">
              BMR
            </Text>
            <Text className="text-white text-xl font-bold mt-1">{bmr}</Text>
            <Text className="text-gray-500 text-[10px] mt-0.5">kcal / day</Text>
          </View>
          <View
            className="flex-1 bg-white/[0.03] rounded-2xl p-4"
            style={{ borderWidth: 1, borderColor: "rgba(255,255,255,0.04)" }}
          >
            <Text className="text-gray-500 text-[10px] font-semibold uppercase tracking-widest">
              TDEE
            </Text>
            <Text className="text-white text-xl font-bold mt-1">{tdee}</Text>
            <Text className="text-gray-500 text-[10px] mt-0.5">kcal / day</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
