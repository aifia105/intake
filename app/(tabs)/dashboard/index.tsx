import { ScrollView, Text, View } from "react-native";

export default function DashboardScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4">
        <Text className="text-text-primary text-3xl font-bold mb-2">
          Dashboard
        </Text>
        <Text className="text-text-muted text-base mb-6">
          Welcome to your nutrition tracker
        </Text>

        <View className="bg-card rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-primary text-xl font-semibold mb-3">
            Today's Summary
          </Text>
          <Text className="text-text-primary text-base mb-2">
            Calories: 0 / 2000
          </Text>
          <Text className="text-text-primary text-base mb-2">
            Protein: 0g / 150g
          </Text>
          <Text className="text-text-primary text-base mb-2">
            Carbs: 0g / 250g
          </Text>
          <Text className="text-text-primary text-base mb-2">
            Fat: 0g / 65g
          </Text>
        </View>

        <View className="bg-card rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-secondary text-xl font-semibold mb-3">
            Quick Stats
          </Text>
          <Text className="text-text-primary text-base mb-2">
            Meals logged today: 0
          </Text>
          <Text className="text-text-primary text-base mb-2">
            Water intake: 0ml
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
