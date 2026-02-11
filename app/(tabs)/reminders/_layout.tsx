import { Stack } from "expo-router";

export default function RemindersStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Reminders",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
