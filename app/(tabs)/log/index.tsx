import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LogScreen() {
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");

  const handleLog = () => {
    // TODO: Implement meal logging
    console.log("Logging meal:", { mealName, calories, protein, carbs, fat });
  };

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4">
        <Text className="text-text-primary text-2xl font-bold mb-6">
          Log Your Meal
        </Text>

        <TextInput
          className="bg-card border border-text-muted/20 rounded-lg p-3 mb-3 text-text-primary text-base"
          placeholder="Meal Name"
          placeholderTextColor="#9CA3AF"
          value={mealName}
          onChangeText={setMealName}
        />

        <TextInput
          className="bg-card border border-text-muted/20 rounded-lg p-3 mb-3 text-text-primary text-base"
          placeholder="Calories"
          placeholderTextColor="#9CA3AF"
          value={calories}
          onChangeText={setCalories}
          keyboardType="numeric"
        />

        <TextInput
          className="bg-card border border-text-muted/20 rounded-lg p-3 mb-3 text-text-primary text-base"
          placeholder="Protein (g)"
          placeholderTextColor="#9CA3AF"
          value={protein}
          onChangeText={setProtein}
          keyboardType="numeric"
        />

        <TextInput
          className="bg-card border border-text-muted/20 rounded-lg p-3 mb-3 text-text-primary text-base"
          placeholder="Carbs (g)"
          placeholderTextColor="#9CA3AF"
          value={carbs}
          onChangeText={setCarbs}
          keyboardType="numeric"
        />

        <TextInput
          className="bg-card border border-text-muted/20 rounded-lg p-3 mb-3 text-text-primary text-base"
          placeholder="Fat (g)"
          placeholderTextColor="#9CA3AF"
          value={fat}
          onChangeText={setFat}
          keyboardType="numeric"
        />

        <TouchableOpacity
          className="bg-primary p-4 rounded-lg items-center mt-2"
          onPress={handleLog}
        >
          <Text className="text-background text-base font-semibold">
            Log Meal
          </Text>
        </TouchableOpacity>

        <View className="mt-8">
          <Text className="text-text-primary text-xl font-semibold mb-4">
            Recent Meals
          </Text>
          <Text className="text-text-muted text-center text-base">
            No meals logged yet
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
