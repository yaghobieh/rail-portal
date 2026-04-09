import { FC } from 'react';
import { Rail, RailSlide } from '@forgedevstack/rail';
import { StoryMode } from '@forgedevstack/rail/modules';
import { STORIES } from '../Demos.const';

export const StoryModeDemo: FC = () => (
  <div className="mx-auto w-full max-w-[240px]" style={{ aspectRatio: '9 / 16' }}>
    <Rail
      modules={[StoryMode]}
      storyMode={{
        enabled: true,
        duration: 3000,
        showProgress: true,
        tapToNavigate: true,
        pauseOnHold: true,
        disableSwipe: true,
      }}
      direction="horizontal"
      allowTouchMove={false}
      className="rounded-2xl overflow-hidden shadow-2xl h-full"
    >
      {STORIES.map((story, i) => (
        <RailSlide key={i}>
          <div
            className="w-full h-full flex flex-col items-center justify-center text-white text-center px-6"
            style={{ background: story.gradient }}
          >
            <h4 className="text-lg font-bold mb-1">{story.title}</h4>
            <p className="text-xs text-white/70">{story.subtitle}</p>
          </div>
        </RailSlide>
      ))}
    </Rail>
  </div>
);
