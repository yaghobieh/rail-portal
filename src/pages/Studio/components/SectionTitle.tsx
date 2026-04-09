import { FC } from 'react';
import { Typography } from '@forgedevstack/bear';

interface SectionTitleProps {
  children: string;
  color: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ children, color }) => (
  <Typography variant="caption" className="font-semibold uppercase tracking-wider mb-3 block" style={{ color, fontSize: '10px' }}>
    {children}
  </Typography>
);
