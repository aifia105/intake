import { Tabs } from "expo-router";
import React from "react";

import { CustomTabBar } from "@/components/ui/custom-tab-bar";
import { AppColors } from "@/constants/theme";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: "absolute" },
        sceneStyle: { backgroundColor: AppColors.background },
      }}
    >
      <Tabs.Screen name="dashboard" />
      <Tabs.Screen name="logs" />
      <Tabs.Screen name="progress" />
      <Tabs.Screen name="reminders" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
