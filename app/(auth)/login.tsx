import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: Implement login logic
    router.replace("/(setup)/setup-profile");
  };

  return (
    <View className="flex-1 p-6 justify-center bg-background">
      <Text className="text-text-primary text-4xl font-bold mb-8 text-center">
        Login
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

      <TouchableOpacity
        className="bg-primary p-4 rounded-lg items-center mt-2"
        onPress={handleLogin}
      >
        <Text className="text-background text-base font-semibold">Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
        <Text className="text-secondary text-center mt-4">
          Don't have an account? Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}
