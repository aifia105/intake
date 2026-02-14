import { Stack } from "expo-router";

export default function LogsStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Logs",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
