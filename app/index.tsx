import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#0a0f1e", "#1a1f35"]}
      className="flex-1 overflow-hidden"
    >
      <View className="absolute top-[-100] right-[-50] w-[300px] h-[300px] bg-primary opacity-[0.08] rounded-full" />
      <View className="absolute bottom-[-80] left-[-40] w-[240px] h-[240px] bg-primary opacity-[0.08] rounded-full" />

      <View className="flex-1 px-8 pt-[120px] pb-0">
        <View className="gap-4">
          <Text className="text-5xl font-inter-bold text-text-primary mb-10">
            Intake
          </Text>
          <Text className="text-3xl font-inter-semibold  text-text-muted">
            Welcome Back
          </Text>
          <Text className="text-base font-inter-regular text-text-muted leading-6">
            Track your nutrition and build better habits
          </Text>
        </View>

        <View className="flex-1" />
      </View>

      <View className="flex-row">
        <Pressable
          onPress={() => router.push("/(auth)/register")}
          className="flex-1 bg-transparent py-[25px] rounded-tr-[40px] items-center active:opacity-70"
        >
          <Text className="text-text-primary text-[17px]  font-inter-semibold">
            Create Account
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/(auth)/login")}
          className="flex-1 bg-primary/70 py-[25px] rounded-tl-[40px] items-center active:opacity-70"
        >
          <Text className="text-text-primary text-[17px]  font-inter-semibold">
            Sign In
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}
