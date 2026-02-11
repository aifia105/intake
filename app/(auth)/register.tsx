import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // TODO: Implement registration logic
    router.replace("/(setup)/setup-profile");
  };

  return (
    <View className="flex-1 p-6 justify-center bg-background">
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
  );
}
