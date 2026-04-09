import { FC } from 'react';
import { Flex } from '@forgedevstack/bear';

interface ToggleRowProps {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}

export const ToggleRow: FC<ToggleRowProps> = ({ label, checked, onChange }) => (
  <Flex justify="between" align="center" className="py-1.5">
    <span className="text-sm">{label}</span>
    <button
      onClick={() => onChange(!checked)}
      className="relative w-10 h-5 rounded-full transition-colors"
      style={{ backgroundColor: checked ? '#06b6d4' : 'rgba(255,255,255,0.12)' }}
    >
      <span
        className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform shadow-sm"
        style={{ left: checked ? '22px' : '2px' }}
      />
    </button>
  </Flex>
);
