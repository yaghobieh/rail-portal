import { FC } from 'react';
import { Typography, CodeBlock, useBear } from '@forgedevstack/bear';
import { DocLayout } from '@/components/DocLayout';
import { DocSection } from '@/components/DocSection';

const CODE_RESPONSIVE = `<Rail
  slidesPerView={1}
  spaceBetween={10}
  breakpoints={{
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    1024: { slidesPerView: 4, spaceBetween: 40 },
  }}
  modules={[Navigation, Pagination]}
>
  <RailSlide>...</RailSlide>
  <RailSlide>...</RailSlide>
</Rail>`;

const CODE_VIRTUAL = `import { Virtual } from '@forgedevstack/rail/modules';
import { Rail, RailSlide } from '@forgedevstack/rail';
import '@forgedevstack/rail/styles.css';

export default function App() {
  const slides = Array.from({ length: 1000 }).map(
    (_, index) => \`Slide \${index + 1}\`
  );

  return (
    <Rail modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
      {slides.map((content, index) => (
        <RailSlide key={content} virtualIndex={index}>
          {content}
        </RailSlide>
      ))}
    </Rail>
  );
}`;

const CODE_CONTROLLER = `import { useState } from 'react';
import { Controller } from '@forgedevstack/rail/modules';
import { Rail, RailSlide } from '@forgedevstack/rail';

function App() {
  const [controlledRail, setControlledRail] = useState(null);

  return (
    <main>
      <Rail
        modules={[Controller]}
        controller={{ control: controlledRail }}
      >
        <RailSlide>Slide 1</RailSlide>
        <RailSlide>Slide 2</RailSlide>
      </Rail>

      <Rail
        modules={[Controller]}
        onRail={setControlledRail}
      >
        <RailSlide>Slide 1</RailSlide>
        <RailSlide>Slide 2</RailSlide>
      </Rail>
    </main>
  );
}`;

const CODE_THUMBS = `import { useState } from 'react';
import { Rail, RailSlide } from '@forgedevstack/rail';
import { Thumbs } from '@forgedevstack/rail/modules';

function App() {
  const [thumbsRail, setThumbsRail] = useState(null);

  return (
    <main>
      <Rail modules={[Thumbs]} thumbs={{ rail: thumbsRail }}>
        <RailSlide>Full Image 1</RailSlide>
        <RailSlide>Full Image 2</RailSlide>
        <RailSlide>Full Image 3</RailSlide>
      </Rail>

      <Rail
        modules={[Thumbs]}
        watchSlidesProgress
        onRail={setThumbsRail}
        slidesPerView={4}
        spaceBetween={10}
      >
        <RailSlide>Thumb 1</RailSlide>
        <RailSlide>Thumb 2</RailSlide>
        <RailSlide>Thumb 3</RailSlide>
      </Rail>
    </main>
  );
}`;

const CODE_AUTOPLAY = `import { Autoplay, Pagination } from '@forgedevstack/rail/modules';

<Rail
  modules={[Autoplay, Pagination]}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: false,
  }}
  pagination={{ clickable: true }}
  loop
>
  <RailSlide>Slide 1</RailSlide>
  <RailSlide>Slide 2</RailSlide>
  <RailSlide>Slide 3</RailSlide>
</Rail>`;

const CODE_MARQUEE = `import { Marquee } from '@forgedevstack/rail/modules';

<Rail
  modules={[Marquee]}
  marquee={{
    duration: 24000,
    fade: true,
    pauseOnHover: true,
    pauseOffscreen: true,
  }}
>
  <RailSlide>Aero</RailSlide>
  <RailSlide>Rail</RailSlide>
  <RailSlide>Bear</RailSlide>
</Rail>`;

const CODE_COUNTER = `import { Counter, Navigation } from '@forgedevstack/rail/modules';

<Rail modules={[Counter, Navigation]} navigation counter={{ separator: ' / ' }}>
  <RailSlide>Slide 1</RailSlide>
  <RailSlide>Slide 2</RailSlide>
  <RailSlide>Slide 3</RailSlide>
</Rail>`;

const CODE_AUTOHEIGHT = `import { AutoHeight, Navigation } from '@forgedevstack/rail/modules';

<Rail modules={[AutoHeight, Navigation]} navigation>
  <RailSlide>Short</RailSlide>
  <RailSlide>A taller slide. The track height follows it.</RailSlide>
</Rail>`;

const TOC = [
  { id: 'responsive', label: 'Responsive' },
  { id: 'virtual', label: 'Virtual Slides' },
  { id: 'controller', label: 'Controller' },
  { id: 'thumbs', label: 'Thumbs' },
  { id: 'autoplay', label: 'Autoplay' },
  { id: 'marquee', label: 'Marquee' },
  { id: 'counter', label: 'Counter' },
  { id: 'autoheight', label: 'Auto Height' },
];

export const ModulesPage: FC = () => {
  const { mode } = useBear();
  const isDark = mode === 'dark';
  const mutedText = isDark ? '#64748b' : '#94a3b8';

  return (
    <DocLayout title="Modules" description="Guides for Rail modules, including marquee, counter, and auto height." toc={TOC}>
      <DocSection id="responsive" title="Responsive Breakpoints">
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          Pass a <code className="text-rail-400">breakpoints</code> object to override any option at specific viewport widths:
        </Typography>
        <CodeBlock code={CODE_RESPONSIVE} language="tsx" title="Responsive" copyable showLineNumbers />
      </DocSection>

      <DocSection id="virtual" title="Virtual Slides">
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          For large slide sets, the Virtual module renders only visible slides for performance. Set <code className="text-rail-400">virtual</code> and provide <code className="text-rail-400">virtualIndex</code> on each slide:
        </Typography>
        <CodeBlock code={CODE_VIRTUAL} language="tsx" title="Virtual Slides" copyable showLineNumbers />
      </DocSection>

      <DocSection id="controller" title="Controller">
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          Synchronize two Rail instances by passing one instance to the other's controller prop:
        </Typography>
        <CodeBlock code={CODE_CONTROLLER} language="tsx" title="Controller" copyable showLineNumbers />
      </DocSection>

      <DocSection id="thumbs" title="Thumbs">
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          Create a thumbnail gallery by storing the thumbs instance and passing it to the main carousel:
        </Typography>
        <CodeBlock code={CODE_THUMBS} language="tsx" title="Thumbs Gallery" copyable showLineNumbers />
      </DocSection>

      <DocSection id="autoplay" title="Autoplay">
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          Configure automatic slide transitions with delay, pause on hover, and interaction control:
        </Typography>
        <CodeBlock code={CODE_AUTOPLAY} language="tsx" title="Autoplay" copyable showLineNumbers />
      </DocSection>

      <DocSection id="marquee" title="Marquee">
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          Marquee clones the slides and scrolls them in a loop. It pauses on hover, on focus, and while the carousel is outside the viewport. It stops when reduced motion is on. Set <code className="text-rail-400">fade</code> to soften the left and right edges.
        </Typography>
        <CodeBlock code={CODE_MARQUEE} language="tsx" title="Marquee" copyable showLineNumbers />
      </DocSection>

      <DocSection id="counter" title="Counter">
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          Counter renders a live indicator, such as 1 / 8, and updates it when the slide changes. Pass <code className="text-rail-400">separator</code> to change the divider, or <code className="text-rail-400">el</code> to write into an element you already rendered.
        </Typography>
        <CodeBlock code={CODE_COUNTER} language="tsx" title="Counter" copyable showLineNumbers />
      </DocSection>

      <DocSection id="autoheight" title="Auto Height">
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          AutoHeight sets the track height from the active slide, so a short slide does not leave a tall empty frame and a tall slide is not clipped.
        </Typography>
        <CodeBlock code={CODE_AUTOHEIGHT} language="tsx" title="Auto Height" copyable showLineNumbers />
      </DocSection>
    </DocLayout>
  );
};
