export const GENDER_OPTIONS = ["Male", "Female", "Other"];

export const ACTIVITY_LEVELS = [
  {
    key: "low",
    label: "Low",
    description: "Little or no exercise",
    icon: "self-improvement",
  },
  {
    key: "moderate",
    label: "Moderate",
    description: "Exercise 3–5 days / week",
    icon: "directions-run",
  },
  {
    key: "high",
    label: "High",
    description: "Intense exercise 6–7 days / week",
    icon: "local-fire-department",
  },
] as const;

export const GOAL_OPTIONS = [
  { key: "cut", label: "Cut", icon: "trending-down" as const },
  { key: "maintain", label: "Maintain", icon: "horizontal-rule" as const },
  { key: "bulk", label: "Bulk", icon: "trending-up" as const },
] as const;
