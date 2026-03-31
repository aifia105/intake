import { View, Text } from "react-native";
import { MiniRing } from "./MiniRing";

export function MacroRingItem({
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
