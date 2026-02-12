import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";

export default function SetupRemindersScreen() {
  const router = useRouter();
  const [breakfastEnabled, setBreakfastEnabled] = useState(true);
  const [lunchEnabled, setLunchEnabled] = useState(true);
  const [dinnerEnabled, setDinnerEnabled] = useState(true);
  const [snackEnabled, setSnackEnabled] = useState(false);

  const handleFinish = () => {
    // TODO: Save reminder settings
    router.replace("/(tabs)/dashboard");
  };

  const handleSkip = () => {
    router.replace("/(tabs)/dashboard");
  };

  return (
    <LinearGradient
      colors={["#0a0f1e", "#1a1f35"]}
      className="flex-1 p-6 justify-center overflow-hidden"
    >
      <Text className="text-text-primary text-4xl font-bold mb-2 text-center">
        Meal Times Setup
      </Text>
      <Text className="text-text-muted text-base mb-8 text-center">
        Set reminders for your meals
      </Text>

      <View className="flex-row justify-between items-center py-4 px-3 border-b border-text-muted/20">
        <Text className="text-text-primary text-lg">Breakfast</Text>
        <Switch
          value={breakfastEnabled}
          onValueChange={setBreakfastEnabled}
          trackColor={{ false: "#374151", true: "#4ADE80" }}
          thumbColor="#fff"
        />
      </View>

      <View className="flex-row justify-between items-center py-4 px-3 border-b border-text-muted/20">
        <Text className="text-text-primary text-lg">Lunch</Text>
        <Switch
          value={lunchEnabled}
          onValueChange={setLunchEnabled}
          trackColor={{ false: "#374151", true: "#4ADE80" }}
          thumbColor="#fff"
        />
      </View>

      <View className="flex-row justify-between items-center py-4 px-3 border-b border-text-muted/20">
        <Text className="text-text-primary text-lg">Dinner</Text>
        <Switch
          value={dinnerEnabled}
          onValueChange={setDinnerEnabled}
          trackColor={{ false: "#374151", true: "#4ADE80" }}
          thumbColor="#fff"
        />
      </View>

      <View className="flex-row justify-between items-center py-4 px-3 border-b border-text-muted/20">
        <Text className="text-text-primary text-lg">Snack</Text>
        <Switch
          value={snackEnabled}
          onValueChange={setSnackEnabled}
          trackColor={{ false: "#374151", true: "#4ADE80" }}
          thumbColor="#fff"
        />
      </View>

      <TouchableOpacity
        className="bg-primary p-4 rounded-lg items-center mt-8"
        onPress={handleFinish}
      >
        <Text className="text-background text-base font-semibold">
          Finish Setup
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="p-3 items-center mt-2" onPress={handleSkip}>
        <Text className="text-secondary">Skip for now</Text>
      </TouchableOpacity>

      <Text className="text-text-muted text-center mt-4">Step 3 of 3</Text>
    </LinearGradient>
  );
}
