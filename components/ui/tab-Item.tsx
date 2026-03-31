import { SPRING_CONFIG, TAB_ICONS, TAB_LABELS } from "@/constants";
import { AppColors } from "@/constants/theme";
import * as Haptics from "expo-haptics";
import React, { useEffect } from "react";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { IconSymbol } from "./icon-symbol";

export function TabItem({
  routeName,
  isFocused,
  onPress,
  onLongPress,
}: {
  routeName: string;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
}) {
  const scale = useSharedValue(1);
  const progress = useSharedValue(isFocused ? 1 : 0);

  useEffect(() => {
    progress.value = withSpring(isFocused ? 1 : 0, SPRING_CONFIG);
  }, [isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const animatedLabelStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isFocused ? 1 : 0.5, { duration: 200 }),
      transform: [{ translateY: withSpring(isFocused ? 0 : 2, SPRING_CONFIG) }],
    };
  });

  const animatedDotStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isFocused ? 1 : 0, { duration: 200 }),
    transform: [{ scale: withSpring(isFocused ? 1 : 0, SPRING_CONFIG) }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.85, SPRING_CONFIG);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, SPRING_CONFIG);
  };

  const iconColor = isFocused ? AppColors.primary : AppColors.textMuted;
  const isLog = routeName === "log";

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={TAB_LABELS[routeName]}
      onPress={() => {
        if (Platform.OS === "ios") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onPress();
      }}
      onLongPress={onLongPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={styles.tabItem}
      activeOpacity={0.7}
    >
      {isLog ? (
        <Animated.View style={[styles.logButton, animatedIconStyle]}>
          <IconSymbol
            name={TAB_ICONS[routeName]}
            size={26}
            color={AppColors.background}
          />
        </Animated.View>
      ) : (
        <>
          <Animated.View style={animatedIconStyle}>
            <IconSymbol
              name={TAB_ICONS[routeName]}
              size={24}
              color={iconColor}
            />
          </Animated.View>
          <Animated.Text
            style={[styles.label, { color: iconColor }, animatedLabelStyle]}
          >
            {TAB_LABELS[routeName]}
          </Animated.Text>
          <Animated.View
            style={[
              styles.activeIndicator,
              { backgroundColor: AppColors.primary },
              animatedDotStyle,
            ]}
          />
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    gap: 4,
  },
  logButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: AppColors.primary,
    alignItems: "center",
    justifyContent: "center",

    ...Platform.select({
      ios: {
        shadowColor: AppColors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
      default: {
        boxShadow: `0px 2px 8px ${AppColors.primary}80`,
      },
    }),
  },
  label: {
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
  activeIndicator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 2,
  },
});
