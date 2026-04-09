import { FC } from 'react';
import { Rail, RailSlide, RailVideo } from '@forgedevstack/rail';
import { Navigation, Pagination, StoryMode } from '@forgedevstack/rail/modules';
import { Typography, Flex } from '@forgedevstack/bear';
import { VIDEO_SLIDES, DEMO_SLIDE_HEIGHT_PX, SLIDE_COLORS } from '../Demos.const';

export const VideoDemo: FC = () => (
  <div className="space-y-10">
    <div>
      <Typography variant="body2" className="font-semibold mb-3">Regular Carousel with Video</Typography>
      <Rail
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        grabCursor
        style={{ height: DEMO_SLIDE_HEIGHT_PX }}
        className="rounded-xl"
      >
        {VIDEO_SLIDES.map((slide, i) => (
          <RailSlide key={i}>
            {slide.type === 'video' ? (
              <RailVideo
                slideIndex={i}
                src={slide.src}
                muted
                loop
                poster={slide.poster}
                className="rounded-xl"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center text-white text-2xl font-bold rounded-xl select-none"
                style={{ background: SLIDE_COLORS[i % SLIDE_COLORS.length] }}
              >
                {slide.label}
              </div>
            )}
          </RailSlide>
        ))}
      </Rail>
    </div>

    <div>
      <Typography variant="body2" className="font-semibold mb-3">Story Mode with Video</Typography>
      <Flex justify="center">
        <div className="w-full max-w-[240px]" style={{ aspectRatio: '9 / 16' }}>
          <Rail
            modules={[StoryMode]}
            storyMode={{
              enabled: true,
              duration: 5000,
              showProgress: true,
              tapToNavigate: true,
              pauseOnHold: true,
              disableSwipe: true,
              controlVisibility: 'hover',
            }}
            direction="horizontal"
            allowTouchMove={false}
            className="rounded-2xl overflow-hidden shadow-2xl h-full"
          >
            {VIDEO_SLIDES.map((slide, i) => (
              <RailSlide key={i}>
                {slide.type === 'video' ? (
                  <RailVideo
                    slideIndex={i}
                    src={slide.src}
                    muted
                    loop
                    objectFit="cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center text-white text-center px-6"
                    style={{ background: SLIDE_COLORS[i % SLIDE_COLORS.length] }}
                  >
                    <h4 className="text-lg font-bold mb-1">{slide.label}</h4>
                  </div>
                )}
              </RailSlide>
            ))}
          </Rail>
        </div>
      </Flex>
    </div>
  </div>
);
