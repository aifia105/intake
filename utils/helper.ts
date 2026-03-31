export function calcBMR(w: number, h: number, a: number, g: string) {
  const base = 10 * w + 6.25 * h - 5 * a;
  return Math.round(g === "Female" ? base - 161 : base + 5);
}

const ACT: Record<string, number> = { low: 1.2, moderate: 1.55, high: 1.9 };

export function calcTDEE(bmr: number, level: string) {
  return Math.round(bmr * (ACT[level] ?? 1.2));
}

export function calcMacros(cal: number) {
  return {
    protein: Math.round((cal * 0.3) / 4),
    carbs: Math.round((cal * 0.4) / 4),
    fat: Math.round((cal * 0.3) / 9),
  };
}
