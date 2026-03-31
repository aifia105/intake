import React from "react";
import Svg, {
  Circle,
  Defs,
  Stop,
  LinearGradient as SvgGrad,
} from "react-native-svg";

export function GradientRing({
  size,
  stroke,
  progress,
  from,
  to,
}: {
  size: number;
  stroke: number;
  progress: number;
  from: string;
  to: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - Math.min(progress, 1));

  return (
    <Svg
      width={size}
      height={size}
      style={{ transform: [{ rotate: "-90deg" }] }}
    >
      <Defs>
        <SvgGrad id="ringGrad" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" stopColor={from} />
          <Stop offset="100%" stopColor={to} />
        </SvgGrad>
      </Defs>
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="rgba(255,255,255,0.04)"
        strokeWidth={stroke}
        fill="none"
      />
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="url(#ringGrad)"
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={off}
        strokeLinecap="round"
      />
    </Svg>
  );
}
