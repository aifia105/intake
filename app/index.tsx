import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to auth after 2 seconds
    const timer = setTimeout(() => {
      router.replace("/(auth)/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-background justify-center items-center">
      <View className="items-center">
        <View className="w-32 h-32 rounded-full bg-card justify-center items-center mb-6 shadow-lg">
          <Text className="text-6xl">🍽️</Text>
        </View>
        <Text className="text-5xl font-bold text-primary mb-2">Intake</Text>
        <Text className="text-lg text-text-muted">Your Nutrition Tracker</Text>
      </View>
    </View>
  );
}
