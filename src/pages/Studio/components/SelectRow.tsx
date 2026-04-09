import { FC } from 'react';

interface SelectRowProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}

export const SelectRow: FC<SelectRowProps> = ({ label, value, options, onChange }) => (
  <div className="py-1.5">
    <span className="text-sm block mb-1.5">{label}</span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 rounded-lg text-sm bg-transparent border appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-rail-400"
      style={{ borderColor: 'rgba(255,255,255,0.1)' }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value} className="bg-gray-900 text-white">
          {o.label}
        </option>
      ))}
    </select>
  </div>
);
