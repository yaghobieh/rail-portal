import { FC } from 'react';
import { Typography, CodeBlock, useBear } from '@forgedevstack/bear';
import { DocLayout } from '@/components/DocLayout';
import { DocSection } from '@/components/DocSection';

const CODE_FADE = `import { Rail, RailSlide } from '@forgedevstack/rail';
import { EffectFade } from '@forgedevstack/rail/modules';
import '@forgedevstack/rail/styles.css';

export default function App() {
  return (
    <Rail modules={[EffectFade]} effect="fade">
      <RailSlide>Slide 1</RailSlide>
      <RailSlide>Slide 2</RailSlide>
      <RailSlide>Slide 3</RailSlide>
    </Rail>
  );
}`;

const CODE_CUBE = `import { EffectCube } from '@forgedevstack/rail/modules';

<Rail
  modules={[EffectCube]}
  effect="cube"
  cubeEffect={{
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  }}
>
  <RailSlide>Slide 1</RailSlide>
  <RailSlide>Slide 2</RailSlide>
</Rail>`;

const CODE_COVERFLOW = `import { EffectCoverflow } from '@forgedevstack/rail/modules';

<Rail
  modules={[EffectCoverflow]}
  effect="coverflow"
  centeredSlides
  slidesPerView="auto"
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
>
  <RailSlide>Slide 1</RailSlide>
  <RailSlide>Slide 2</RailSlide>
  <RailSlide>Slide 3</RailSlide>
</Rail>`;

const CODE_CARDS = `import { EffectCards } from '@forgedevstack/rail/modules';

<Rail modules={[EffectCards]} effect="cards" cardsEffect={{ perSlideOffset: 8 }}>
  <RailSlide>Card 1</RailSlide>
  <RailSlide>Card 2</RailSlide>
  <RailSlide>Card 3</RailSlide>
</Rail>`;

const CODE_CREATIVE = `import { EffectCreative } from '@forgedevstack/rail/modules';

<Rail
  modules={[EffectCreative]}
  effect="creative"
  creativeEffect={{
    prev: { shadow: true, translate: [0, 0, -400] },
    next: { translate: ['100%', 0, 0] },
  }}
>
  <RailSlide>Slide 1</RailSlide>
  <RailSlide>Slide 2</RailSlide>
</Rail>`;

const EFFECTS = [
  { id: 'fade', title: 'Fade', desc: 'Smooth opacity crossfade between slides.', code: CODE_FADE },
  { id: 'cube', title: 'Cube', desc: '3D cube rotation with configurable shadow and slide shadows.', code: CODE_CUBE },
  { id: 'coverflow', title: 'Coverflow', desc: '3D coverflow arc with perspective, depth, and stretch.', code: CODE_COVERFLOW },
  { id: 'cards', title: 'Cards', desc: 'Stacked deck of cards with per-slide offset.', code: CODE_CARDS },
  { id: 'creative', title: 'Creative', desc: 'Fully custom transforms for prev/next slides.', code: CODE_CREATIVE },
];

const TOC = EFFECTS.map((e) => ({ id: e.id, label: e.title }));

export const EffectsPage: FC = () => {
  const { mode } = useBear();
  const isDark = mode === 'dark';
  const mutedText = isDark ? '#64748b' : '#94a3b8';

  return (
    <DocLayout title="Effects" description="Rail includes 7 transition effects. Import the effect module and set the effect prop. Each effect has its own options object." toc={TOC}>
      {EFFECTS.map((effect) => (
        <DocSection key={effect.id} id={effect.id} title={effect.title}>
          <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
            {effect.desc}
          </Typography>
          <CodeBlock code={effect.code} language="tsx" title={effect.title} copyable showLineNumbers />
        </DocSection>
      ))}
    </DocLayout>
  );
};
