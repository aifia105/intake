import { Stack } from "expo-router";

export default function SetupLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="setup-profile" />
      <Stack.Screen name="setup-goals" />
      <Stack.Screen name="setup-reminders" />
    </Stack>
  );
}
