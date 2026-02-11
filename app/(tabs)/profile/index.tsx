import { useRouter } from "expo-router";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => {
          // TODO: Implement logout logic
          router.replace("/(auth)/login");
        },
      },
    ]);
  };

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4">
        <View className="items-center mb-6">
          <View className="w-20 h-20 rounded-full bg-primary justify-center items-center mb-3">
            <Text className="text-background text-4xl font-bold">U</Text>
          </View>
          <Text className="text-text-primary text-2xl font-bold mb-1">
            User Name
          </Text>
          <Text className="text-text-muted text-base">user@example.com</Text>
        </View>

        <View className="bg-card rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-primary text-xl font-semibold mb-3">
            Personal Information
          </Text>
          <View className="flex-row justify-between py-2">
            <Text className="text-text-muted text-base">Age:</Text>
            <Text className="text-text-primary text-base font-medium">
              -- years
            </Text>
          </View>
          <View className="flex-row justify-between py-2">
            <Text className="text-text-muted text-base">Height:</Text>
            <Text className="text-text-primary text-base font-medium">
              -- cm
            </Text>
          </View>
          <View className="flex-row justify-between py-2">
            <Text className="text-text-muted text-base">Weight:</Text>
            <Text className="text-text-primary text-base font-medium">
              -- kg
            </Text>
          </View>
        </View>

        <View className="bg-card rounded-xl p-4 mb-4 shadow-sm">
          <Text className="text-secondary text-xl font-semibold mb-3">
            Goals
          </Text>
          <View className="flex-row justify-between py-2">
            <Text className="text-text-muted text-base">Target Weight:</Text>
            <Text className="text-text-primary text-base font-medium">
              -- kg
            </Text>
          </View>
          <View className="flex-row justify-between py-2">
            <Text className="text-text-muted text-base">Daily Calories:</Text>
            <Text className="text-text-primary text-base font-medium">
              -- kcal
            </Text>
          </View>
          <View className="flex-row justify-between py-2">
            <Text className="text-text-muted text-base">Daily Protein:</Text>
            <Text className="text-text-primary text-base font-medium">
              -- g
            </Text>
          </View>
        </View>

        <TouchableOpacity className="bg-primary p-4 rounded-lg items-center mt-2">
          <Text className="text-background text-base font-semibold">
            Edit Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-card border-2 border-danger p-4 rounded-lg items-center mt-3"
          onPress={handleLogout}
        >
          <Text className="text-danger text-base font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
