import { Stack } from "expo-router";

export default function ProgressStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Progress",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
