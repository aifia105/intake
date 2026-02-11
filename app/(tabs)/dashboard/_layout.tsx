import { Stack } from "expo-router";

export default function DashboardStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Dashboard",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
