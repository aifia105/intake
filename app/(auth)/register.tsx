import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  useEffect(() => {
    // Slide up animation on mount
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
      tension: 50,
      friction: 8,
    }).start();
  }, []);

  const handleRegister = () => {
    // TODO: Implement registration logic
    router.replace("/(setup)/setup-profile");
  };

  return (
    <View className="flex-1 bg-background">
      {/* Top Component - 20% with LinearGradient */}
      <LinearGradient
        colors={["#0a0f1e", "#1a1f35"]}
        className="h-[20%] overflow-hidden"
      >
        <View className="absolute top-[-100] right-[-50] w-[300px] h-[300px] bg-primary opacity-[0.08] rounded-full" />
        <View className="absolute bottom-[-80] left-[-40] w-[240px] h-[240px] bg-primary opacity-[0.08] rounded-full" />

        <View className="flex-1 px-8 justify-center">
          <Text className="text-5xl font-bold text-text-primary">Intake</Text>
        </View>
      </LinearGradient>

      {/* Bottom Component - 80% with slide animation */}
      <Animated.View
        style={{
          transform: [{ translateY: slideAnim }],
          height: "80%",
        }}
        className="bg-background"
      >
        <View className="flex-1 p-6 justify-center">
          <Text className="text-text-primary text-4xl font-bold mb-8 text-center">
            Create Account
          </Text>

          <TextInput
            className="bg-card border border-text-muted/20 rounded-lg p-3 mb-4 text-text-primary text-base"
            placeholder="Email"
            placeholderTextColor="#9CA3AF"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            className="bg-card border border-text-muted/20 rounded-lg p-3 mb-4 text-text-primary text-base"
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TextInput
            className="bg-card border border-text-muted/20 rounded-lg p-3 mb-4 text-text-primary text-base"
            placeholder="Confirm Password"
            placeholderTextColor="#9CA3AF"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <TouchableOpacity
            className="bg-primary p-4 rounded-lg items-center mt-2"
            onPress={handleRegister}
          >
            <Text className="text-background text-base font-semibold">
              Register
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Text className="text-secondary text-center mt-4">
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}
