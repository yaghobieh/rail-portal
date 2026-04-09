import { FC, useState } from 'react';
import { BearIcons } from '@forgedevstack/bear';
import { Rail, RailSlide } from '@forgedevstack/rail';
import type { RailInstance } from '@forgedevstack/rail';
import { StoryMode } from '@forgedevstack/rail/modules';
import { STORY_SLIDES } from '../../Home.const';
import type { StoryDemoProps, StorySlideItem } from './StoryDemo.types';
import { CONTROL_POSITION_CLASSES, COUNTER_POSITION, CLOSE_POSITION, HEADER_POSITION, DEFAULT_STORY_DURATION } from './StoryDemo.const';

const ICON_MAP: Record<string, typeof BearIcons.RocketIcon> = {
  rocket: BearIcons.RocketIcon,
  package: BearIcons.PackageIcon,
  sparkles: BearIcons.SparklesIcon,
  smartphone: BearIcons.SmartphoneIcon,
  zap: BearIcons.ZapIcon,
};

function resolveIcon(slide: StorySlideItem) {
  if (slide.icon) return slide.icon;
  if (slide.iconKey) {
    const Icon = ICON_MAP[slide.iconKey];
    return Icon ? <Icon size="xl" /> : null;
  }
  return null;
}

export const StoryDemo: FC<StoryDemoProps> = ({
  items,
  controlPosition = 'center',
  playIcon,
  pauseIcon,
  hideControl = false,
  showCounter = false,
  header,
  showClose = false,
  onClose,
  duration = DEFAULT_STORY_DURATION,
}) => {
  const slides: StorySlideItem[] = items ?? STORY_SLIDES;
  const [railInstance, setRailInstance] = useState<RailInstance | null>(null);
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const togglePause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!railInstance) return;
    if (paused) {
      railInstance.emit('storyResume');
    } else {
      railInstance.emit('storyPause');
    }
    setPaused(!paused);
  };

  const resolvedPlayIcon = playIcon ?? <BearIcons.PlayIcon size="xs" />;
  const resolvedPauseIcon = pauseIcon ?? <BearIcons.PauseIcon size="xs" />;
  const positionClass = CONTROL_POSITION_CLASSES[controlPosition];

  return (
    <div className="relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '9 / 16', maxHeight: 560 }}>
      <Rail
        modules={[StoryMode]}
        storyMode={{
          enabled: true,
          duration,
          showProgress: true,
          tapToNavigate: true,
          pauseOnHold: true,
          pauseOnTap: false,
          disableSwipe: true,
          controlVisibility: 'none',
        }}
        direction="horizontal"
        allowTouchMove={false}
        className="h-full"
        style={{ height: '100%' }}
        onRail={(instance) => {
          const rail = instance as RailInstance;
          setRailInstance(rail);
          rail.on('slideChange', (index: number) => setActiveIndex(index));
          rail.on('storyPause', () => setPaused(true));
          rail.on('storyResume', () => setPaused(false));
        }}
      >
        {slides.map((slide, i) => {
          const icon = resolveIcon(slide);
          return (
            <RailSlide key={i}>
              <div
                className="w-full h-full flex flex-col items-center justify-center text-white text-center px-8 select-none"
                style={{ background: slide.gradient }}
              >
                {icon && <div className="mb-6">{icon}</div>}
                <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                {slide.subtitle && (
                  <p className="text-sm text-white/80 leading-relaxed">{slide.subtitle}</p>
                )}
                {slide.link && (
                  <a
                    href={slide.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium hover:bg-white/30 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {slide.link.label}
                    <BearIcons.ExternalLinkIcon size="xs" />
                  </a>
                )}
              </div>
            </RailSlide>
          );
        })}
      </Rail>

      {showClose && (
        <button
          className={`absolute ${CLOSE_POSITION} z-30 w-8 h-8 rounded-full bg-black/30 flex items-center justify-center backdrop-blur-sm hover:bg-black/50 transition-colors text-white`}
          onClick={onClose}
          aria-label="Close"
        >
          <BearIcons.CloseIcon size="xs" />
        </button>
      )}

      {header && (
        <div className={`absolute ${HEADER_POSITION} z-10`}>
          {header}
        </div>
      )}

      {!hideControl && (
        <button
          className={`absolute ${positionClass} z-30 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors text-white`}
          onClick={togglePause}
          aria-label={paused ? 'Play' : 'Pause'}
        >
          {paused ? resolvedPlayIcon : resolvedPauseIcon}
        </button>
      )}

      {showCounter && (
        <div className={`absolute ${COUNTER_POSITION} z-30 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-mono`}>
          {activeIndex + 1} / {slides.length}
        </div>
      )}
    </div>
  );
};
