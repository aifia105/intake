import { Platform } from "react-native";

export const AppColors = {
  background: "#0B0F14",
  card: "#151A21",
  primary: "#4ADE80",
  secondary: "#22D3EE",
  accent: "#FACC15",
  textPrimary: "#E5E7EB",
  textMuted: "#9CA3AF",
  danger: "#F87171",
};

const tintColorLight = "#4ADE80";
const tintColorDark = "#4ADE80";

export const Colors = {
  light: {
    text: AppColors.textPrimary,
    background: AppColors.background,
    tint: tintColorLight,
    icon: AppColors.textMuted,
    tabIconDefault: AppColors.textMuted,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: AppColors.textPrimary,
    background: AppColors.background,
    tint: tintColorDark,
    icon: AppColors.textMuted,
    tabIconDefault: AppColors.textMuted,
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
