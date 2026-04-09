import { FC, useState } from 'react';
import { Typography, CodeBlock, Button, Flex, BearIcons } from '@forgedevstack/bear';
import type { DemoKey } from '../Demos.const';
import { DEMO_CODES } from '../Demos.const';
import { BasicDemo } from './BasicDemo';
import { EffectsDemo } from './EffectsDemo';
import { StoryModeDemo } from './StoryModeDemo';
import { GalleryDemo } from './GalleryDemo';
import { GridDemo } from './GridDemo';
import { VideoDemo } from './VideoDemo';

const DEMO_COMPONENTS: Record<DemoKey, FC> = {
  basic: BasicDemo,
  effects: EffectsDemo,
  story: StoryModeDemo,
  gallery: GalleryDemo,
  grid: GridDemo,
  video: VideoDemo,
};

interface DemoSectionProps {
  demoKey: DemoKey;
  title: string;
  description: string;
  cardBg: string;
  cardBorder: string;
  mutedText: string;
}

export const DemoSection: FC<DemoSectionProps> = ({ demoKey, title, description, cardBg, cardBorder, mutedText }) => {
  const [showCode, setShowCode] = useState(false);
  const Component = DEMO_COMPONENTS[demoKey];

  return (
    <div
      className="rounded-2xl overflow-hidden p-6 md:p-8"
      style={{ backgroundColor: cardBg, border: `1px solid ${cardBorder}` }}
    >
      <Flex justify="between" align="center" className="mb-6">
        <div>
          <Typography variant="h4" className="font-bold">{title}</Typography>
          <Typography variant="caption" style={{ color: mutedText }}>{description}</Typography>
        </div>
        <Button
          variant="railGhost"
          size="sm"
          leftIcon={showCode ? <BearIcons.VisibilityIcon size="xs" /> : <BearIcons.CodeIcon size="xs" />}
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Preview' : 'Code'}
        </Button>
      </Flex>

      {showCode ? (
        <CodeBlock
          code={DEMO_CODES[demoKey]}
          language="tsx"
          title={`${title} — Code`}
          copyable
          showLineNumbers
        />
      ) : (
        <Component />
      )}
    </div>
  );
};
