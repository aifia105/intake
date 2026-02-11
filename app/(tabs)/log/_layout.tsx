import { Stack } from "expo-router";

export default function LogStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Log Meal",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
