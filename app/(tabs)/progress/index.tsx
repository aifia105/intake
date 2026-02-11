import { ScrollView, Text, View } from "react-native";

export default function ProgressScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4">
        <Text className="text-text-primary text-3xl font-bold mb-6">
          Your Progress
        </Text>

        <View className="bg-card rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-primary text-xl font-semibold mb-3">
            Weight Tracking
          </Text>
          <Text className="text-text-primary text-base mb-2">
            Current Weight: -- kg
          </Text>
          <Text className="text-text-primary text-base mb-2">
            Starting Weight: -- kg
          </Text>
          <Text className="text-text-primary text-base mb-2">
            Goal Weight: -- kg
          </Text>
          <Text className="text-text-primary text-base mb-2">
            Change: -- kg
          </Text>
        </View>

        <View className="bg-card rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-secondary text-xl font-semibold mb-3">
            Weekly Average
          </Text>
          <Text className="text-text-primary text-base mb-2">
            Calories: -- kcal/day
          </Text>
          <Text className="text-text-primary text-base mb-2">
            Protein: -- g/day
          </Text>
          <Text className="text-text-primary text-base mb-2">
            Meals logged: -- meals
          </Text>
        </View>

        <View className="bg-card rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-accent text-xl font-semibold mb-3">Streak</Text>
          <Text className="text-primary text-5xl font-bold mb-2">0 days</Text>
          <Text className="text-text-muted text-base">
            Keep logging to build your streak!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
