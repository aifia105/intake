import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SetupProfileScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleNext = () => {
    // TODO: Save profile data
    router.push("/(setup)/setup-goals");
  };

  return (
    <View className="flex-1 p-6 justify-center bg-background">
      <Text className="text-text-primary text-4xl font-bold mb-2 text-center">
        Profile Setup
      </Text>
      <Text className="text-text-muted text-base mb-8 text-center">
        Tell us about yourself
      </Text>

      <TextInput
        className="bg-card border border-text-muted/20 rounded-lg p-3 mb-4 text-text-primary text-base"
        placeholder="Name"
        placeholderTextColor="#9CA3AF"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        className="bg-card border border-text-muted/20 rounded-lg p-3 mb-4 text-text-primary text-base"
        placeholder="Age"
        placeholderTextColor="#9CA3AF"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <TextInput
        className="bg-card border border-text-muted/20 rounded-lg p-3 mb-4 text-text-primary text-base"
        placeholder="Height (cm)"
        placeholderTextColor="#9CA3AF"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />

      <TextInput
        className="bg-card border border-text-muted/20 rounded-lg p-3 mb-4 text-text-primary text-base"
        placeholder="Weight (kg)"
        placeholderTextColor="#9CA3AF"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />

      <TouchableOpacity
        className="bg-primary p-4 rounded-lg items-center mt-4"
        onPress={handleNext}
      >
        <Text className="text-background text-base font-semibold">Next</Text>
      </TouchableOpacity>

      <Text className="text-text-muted text-center mt-4">Step 1 of 3</Text>
    </View>
  );
}
