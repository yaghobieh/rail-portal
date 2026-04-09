import { FC, ReactNode } from 'react';
import { Typography, useBear } from '@forgedevstack/bear';

interface DocSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export const DocSection: FC<DocSectionProps> = ({ id, title, children }) => {
  const { mode } = useBear();
  return (
    <section id={id} className="scroll-mt-24 mb-16">
      <Typography
        variant="h3"
        className="text-2xl font-bold mb-4 pb-2"
        style={{ borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}` }}
      >
        {title}
      </Typography>
      {children}
    </section>
  );
};
