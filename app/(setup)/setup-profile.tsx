import { ACTIVITY_LEVELS } from "@/constants";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ActivityKey = (typeof ACTIVITY_LEVELS)[number]["key"];

export default function SetupProfileScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState<ActivityKey | "">("");

  const handleNext = () => {
    // TODO: Save profile data
    router.push("/(setup)/setup-goals");
  };

  return (
    <SafeAreaView className="flex-1">
      <LinearGradient colors={["#0B0F14", "#151A21"]} className="flex-1 pt-10">
        <ScrollView
          className="flex-1 p-6"
          contentContainerStyle={{
            paddingBottom: 40,
            justifyContent: "center",
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled"
        >
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

          <Text className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-2 ml-1">
            Activity Level
          </Text>
          <View className="mb-4">
            {ACTIVITY_LEVELS.map((level) => {
              const selected = activityLevel === level.key;
              return (
                <TouchableOpacity
                  key={level.key}
                  className={`flex-row items-center bg-card rounded-xl p-4 mb-2 border ${
                    selected ? "border-primary" : "border-white/5"
                  }`}
                  onPress={() => setActivityLevel(level.key)}
                  activeOpacity={0.7}
                >
                  <View
                    className={`w-5 h-5 rounded-full border-2 items-center justify-center mr-3 ${
                      selected ? "border-primary" : "border-text-muted"
                    }`}
                  >
                    {selected && (
                      <View className="w-2.5 h-2.5 rounded-full bg-primary" />
                    )}
                  </View>

                  <View
                    className={`w-10 h-10 rounded-lg items-center justify-center mr-3 ${
                      selected ? "bg-primary/15" : "bg-background"
                    }`}
                  >
                    <MaterialIcons
                      name={level.icon}
                      size={22}
                      color={selected ? "#4ADE80" : "#9CA3AF"}
                    />
                  </View>

                  <View className="flex-1">
                    <Text className="text-text-primary text-base font-semibold">
                      {level.label}
                    </Text>
                    <Text className="text-text-muted text-xs">
                      {level.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity
            className="bg-primary p-4 rounded-lg items-center mt-4"
            onPress={handleNext}
          >
            <Text className="text-background text-base font-semibold">
              Next
            </Text>
          </TouchableOpacity>

          <Text className="text-text-muted text-center mt-4">Step 1 of 3</Text>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}
