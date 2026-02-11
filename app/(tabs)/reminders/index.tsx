import { useState } from "react";
import { ScrollView, Switch, Text, View } from "react-native";

export default function RemindersScreen() {
  const [breakfastEnabled, setBreakfastEnabled] = useState(true);
  const [lunchEnabled, setLunchEnabled] = useState(true);
  const [dinnerEnabled, setDinnerEnabled] = useState(true);
  const [snackEnabled, setSnackEnabled] = useState(false);

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4">
        <Text className="text-text-primary text-3xl font-bold mb-2">
          Meal Reminders
        </Text>
        <Text className="text-text-muted text-base mb-6">
          Manage your meal reminder notifications
        </Text>

        <View className="bg-card rounded-xl p-4 shadow-sm">
          <View className="flex-row justify-between items-center py-3">
            <View className="flex-1">
              <Text className="text-text-primary text-lg font-medium mb-1">
                Breakfast
              </Text>
              <Text className="text-text-muted text-sm">8:00 AM</Text>
            </View>
            <Switch
              value={breakfastEnabled}
              onValueChange={setBreakfastEnabled}
              trackColor={{ false: "#374151", true: "#4ADE80" }}
              thumbColor="#fff"
            />
          </View>

          <View className="flex-row justify-between items-center py-3 border-t border-text-muted/20">
            <View className="flex-1">
              <Text className="text-text-primary text-lg font-medium mb-1">
                Lunch
              </Text>
              <Text className="text-text-muted text-sm">12:30 PM</Text>
            </View>
            <Switch
              value={lunchEnabled}
              onValueChange={setLunchEnabled}
              trackColor={{ false: "#374151", true: "#4ADE80" }}
              thumbColor="#fff"
            />
          </View>

          <View className="flex-row justify-between items-center py-3 border-t border-text-muted/20">
            <View className="flex-1">
              <Text className="text-text-primary text-lg font-medium mb-1">
                Dinner
              </Text>
              <Text className="text-text-muted text-sm">6:30 PM</Text>
            </View>
            <Switch
              value={dinnerEnabled}
              onValueChange={setDinnerEnabled}
              trackColor={{ false: "#374151", true: "#4ADE80" }}
              thumbColor="#fff"
            />
          </View>

          <View className="flex-row justify-between items-center py-3 border-t border-text-muted/20">
            <View className="flex-1">
              <Text className="text-text-primary text-lg font-medium mb-1">
                Snack
              </Text>
              <Text className="text-text-muted text-sm">3:00 PM</Text>
            </View>
            <Switch
              value={snackEnabled}
              onValueChange={setSnackEnabled}
              trackColor={{ false: "#374151", true: "#4ADE80" }}
              thumbColor="#fff"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
