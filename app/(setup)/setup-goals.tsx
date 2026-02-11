import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SetupGoalsScreen() {
  const router = useRouter();
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
    <View className="flex-1 p-6 justify-center bg-background">
      <Text className="text-text-primary text-4xl font-bold mb-2 text-center">
        Goal Setup
      </Text>
      <Text className="text-text-muted text-base mb-8 text-center">
        Set your nutrition goals
      </Text>

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
    </View>
  );
}
