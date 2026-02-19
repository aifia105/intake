import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Pressable,
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
    <View className="flex-1 overflow-hidden">
      <LinearGradient colors={["#0B0F14", "#151A21"]} className="flex-1">
        <View className="absolute top-[-100] right-[-50] w-[300px] h-[300px] bg-primary opacity-[0.08] rounded-full" />

        <View className="h-[25%] px-8 pt-16 justify-between pb-10">
          <Pressable
            onPress={() => router.push("/")}
            className="flex-row items-center gap-2"
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="#ffffff" />
          </Pressable>
        </View>

        <Animated.View
          style={{
            transform: [{ translateY: slideAnim }],
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#151A21",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              overflow: "hidden",
              paddingHorizontal: 32,
              paddingVertical: 32,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: -1,
              },
              shadowOpacity: 0.1,
              shadowRadius: 20,
              elevation: 10,
            }}
          >
            <Text className="text-text-muted text-3xl font-inter-semibold mr-2 mb-8 text-center">
              Create Account
            </Text>
            <View className="mb-5">
              <Text className="text-sm font-inter-semibold text-text-primary mb-2">
                Email
              </Text>
              <TextInput
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                className="border border-text-muted/30 rounded-xl px-4 py-4 text-base font-inter-regular text-text-primary bg-card"
                placeholderTextColor="#6B7280"
              />
            </View>
            <View className="mb-5">
              <Text className="text-sm font-inter-semibold text-text-primary mb-2">
                Password
              </Text>
              <TextInput
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                className="border border-text-muted/30 rounded-xl px-4 py-4 text-base font-inter-regular text-text-primary bg-card"
                placeholderTextColor="#6B7280"
              />
            </View>
            <View className="mb-8">
              <Text className="text-sm font-inter-semibold text-text-primary mb-2">
                Confirm Password
              </Text>
              <TextInput
                placeholder="Confirm your password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                className="border border-text-muted/30 rounded-xl px-4 py-4 text-base font-inter-regular text-text-primary bg-card"
                placeholderTextColor="#6B7280"
              />
            </View>
            <TouchableOpacity
              onPress={handleRegister}
              className="bg-primary py-4 rounded-xl items-center mb-6 shadow-lg"
            >
              <Text className="text-background text-base font-inter-bold">
                Register
              </Text>
            </TouchableOpacity>
            <View className="flex-row items-center mb-6">
              <View className="flex-1 h-[1px] bg-text-muted/20" />
              <Text className="mx-4 text-text-muted text-sm font-inter-regular">
                Or continue with
              </Text>
              <View className="flex-1 h-[1px] bg-text-muted/20" />
            </View>
            <View className="flex-row gap-4 mb-6">
              <TouchableOpacity className="flex-1 flex-row items-center justify-center py-3.5 rounded-xl border border-text-muted/30 bg-card">
                <Ionicons name="logo-google" size={20} color="#DB4437" />
                <Text className="ml-2 text-sm font-inter-semibold text-text-primary">
                  Google
                </Text>
              </TouchableOpacity>

              <TouchableOpacity className="flex-1 flex-row items-center justify-center py-3.5 rounded-xl border border-text-muted/30 bg-card">
                <Ionicons name="logo-facebook" size={20} color="#1877F2" />
                <Text className="ml-2 text-sm font-inter-semibold text-text-primary">
                  Facebook
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => router.push("/(auth)/login")}
              className="items-center py-2"
            >
              <Text className="text-text-muted text-sm font-inter-regular">
                Already have an account?{" "}
                <Text className="text-primary font-inter-semibold">Login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
