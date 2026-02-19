import { GOAL_OPTIONS } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

type GoalKey = (typeof GOAL_OPTIONS)[number]["key"];

export default function SetupGoalsScreen() {
  const router = useRouter();
  const [goal, setGoal] = useState<GoalKey | "">("");
  const [targetWeight, setTargetWeight] = useState("");
  const [targetCalories, setTargetCalories] = useState("");
  const [targetProtein, setTargetProtein] = useState("");

  const handleNext = () => {
    // TODO: Save goals data
    router.push("/(setup)/setup-reminders");
  };

  const handleSkip = () => {
    router.push("/(setup)/setup-reminders");
  };

  return (
    <LinearGradient
      colors={["#0B0F14", "#151A21"]}
      className="flex-1 p-6 justify-center overflow-hidden"
    >
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-16 left-6 z-10 flex-row items-center"
      >
        <Ionicons name="chevron-back" size={24} color="#9CA3AF" />
      </TouchableOpacity>

      <Text className="text-text-primary text-4xl mr-2 font-bold mb-2 text-center">
        Goal Setup
      </Text>
      <Text className="text-text-muted text-base mr-2 mb-8 text-center">
        Set your nutrition goals
      </Text>

      {/* Goal Selection */}
      <Text className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-2 ml-1">
        Goal
      </Text>
      <View className="flex-row mb-4 gap-2">
        {GOAL_OPTIONS.map((option) => {
          const selected = goal === option.key;
          return (
            <TouchableOpacity
              key={option.key}
              className={`flex-1 items-center bg-card rounded-lg py-3 px-2 border ${
                selected ? "border-primary" : "border-white/5"
              }`}
              onPress={() => setGoal(option.key)}
              activeOpacity={0.7}
            >
              <MaterialIcons
                name={option.icon}
                size={20}
                color={selected ? "#4ADE80" : "#9CA3AF"}
              />
              <Text
                className={`text-sm font-semibold mt-1 ${selected ? "text-primary" : "text-text-primary"}`}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TextInput
        className="bg-card border border-text-muted/20 rounded-lg p-3 mb-4 text-text-primary text-base"
        placeholder="Target Weight (kg)"
        placeholderTextColor="#9CA3AF"
        value={targetWeight}
        onChangeText={setTargetWeight}
        keyboardType="numeric"
      />

      <TextInput
        className="bg-card border border-text-muted/20 rounded-lg p-3 mb-4 text-text-primary text-base"
        placeholder="Daily Calories Goal"
        placeholderTextColor="#9CA3AF"
        value={targetCalories}
        onChangeText={setTargetCalories}
        keyboardType="numeric"
      />

      <TextInput
        className="bg-card border border-text-muted/20 rounded-lg p-3 mb-4 text-text-primary text-base"
        placeholder="Daily Protein Goal (g)"
        placeholderTextColor="#9CA3AF"
        value={targetProtein}
        onChangeText={setTargetProtein}
        keyboardType="numeric"
      />

      <TouchableOpacity
        className="bg-primary p-4 rounded-lg items-center mt-4"
        onPress={handleNext}
      >
        <Text className="text-background text-base font-semibold">Next</Text>
      </TouchableOpacity>

      <TouchableOpacity className="p-3 items-center mt-2" onPress={handleSkip}>
        <Text className="text-secondary">Skip for now</Text>
      </TouchableOpacity>

      <Text className="text-text-muted text-center mt-4">Step 2 of 3</Text>
    </LinearGradient>
  );
}
