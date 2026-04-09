import { FC } from 'react';
import { Flex } from '@forgedevstack/bear';

const FULL_PCT = 100;

interface RangeRowProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (v: number) => void;
}

export const RangeRow: FC<RangeRowProps> = ({ label, value, min, max, step = 1, unit = '', onChange }) => (
  <div className="py-1.5">
    <Flex justify="between" align="center" className="mb-1.5">
      <span className="text-sm">{label}</span>
      <span className="text-xs font-mono text-rail-400">{value}{unit}</span>
    </Flex>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full accent-rail-400 h-1.5 rounded-full appearance-none cursor-pointer"
      style={{ background: `linear-gradient(to right, #06b6d4 ${((value - min) / (max - min)) * FULL_PCT}%, rgba(255,255,255,0.1) ${((value - min) / (max - min)) * FULL_PCT}%)` }}
    />
  </div>
);
