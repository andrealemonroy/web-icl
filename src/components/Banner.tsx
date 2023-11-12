import React, { FC, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface SlideProps {
  id: number;
  titleFirst: string;
  titleSecond: string;
  description: string;
  descriptionSecond?: string;
  image: string;
  background: string;
  align: string;
  buttonText?: string;
  imageCaption?: string;
  link?: string;
}

interface BannerProps {
  slides: SlideProps[];
  setOpenMenu: (value: boolean) => void;
}

export const Banner: FC<BannerProps> = ({ slides, setOpenMenu }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<string | null>(null);

  const [shouldRenderContent, setShouldRenderContent] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const slideTimer = setInterval(nextSlide, 6000); // 6000 ms = 6 segundos
    setTimer(slideTimer);

    return () => {
      // Limpia el temporizador cuando el componente se desmonta
      if (slideTimer) {
        clearInterval(slideTimer);
      }
    };
  }, []);

  const renderContent = (slide: SlideProps) => {
    return (
      <>
        <h1
          className={`sm:text-[4vw] text-2xl font-light font-acto leading-tight text-white`}
        >
          {slide.titleFirst}
          <br />
          {slide.titleSecond}
        </h1>

        <p
          className={`sm:text-[1.8vw] text-md font-lato sm:mt-[10px] ${'text-white'} leading-tight sm:w-[30vw]`}
        >
          {slides[currentSlide].description}
          <br />
          {slides[currentSlide].descriptionSecond}
        </p>

        {slide.buttonText && (
          <Link to={slide.link || '/'}>
            <div
              className="bg-primary px-[12px] py-[7px] rounded-md mt-[12px] text-white hover:bg-pink hover:text-white sm:text-[1.1vw] text-sm shadow-md font-lato-bold w-fit"
              onClick={() => {
                if (slide.link?.includes('#')) {
                  setOpenMenu(true);
                }
              }}
            >
              {slides[currentSlide].buttonText}
            </div>
          </Link>
        )}
      </>
    );
  };

  const nextSlide = () => {
    if (timer) {
      clearInterval(timer); // Limpia el temporizador actual
    }
    setDirection('next');
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (timer) {
      clearInterval(timer); // Limpia el temporizador actual
    }
    setDirection('prev');
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const getAnimationClass = (index: number) => {
    if (index === currentSlide) {
      return direction === 'next' ? 'slide-enter-next' : 'slide-enter-prev';
    }
    return direction === 'next' ? 'slide-leave-next' : 'slide-leave-prev';
  };

  const imageClass = `bg-image-${currentSlide + 1}`;

  return (
    <div className="w-full">
      <div className="overflow-hidden relative sm:h-[calc(100vh-240px)] h-[45vh] w-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${getAnimationClass(index)} smallScreenMaxWidth
          flex  flex-row items-center justify-center w-screen absolute bg-cover
          sm:h-[calc(100vh-240px)] h-[45vh] sm:w-screen
          bg-gradient-to-r from-primary from-[20%] via-blue via-[50%] to-lightBlue to-[100%] sm:bg-cover
          ${imageClass}
        `}
            style={{
              backgroundPosition: 'left center', // Adjusted this line
              backgroundRepeat: 'no-repeat',
              width: '100vw',
              transform: `translateX(${
                index === currentSlide
                  ? '0'
                  : index > currentSlide
                  ? '100%'
                  : '-100%'
              })`,
              transition:
                'transform 0.5s ease-in-out, background-image 0.5s ease-in-out', // Adjusted this line
            }}
          >
            <div className="sm:w-[10vw] w-[5vw] flex justify-end">
              <button
                className="sm:w-10 sm:p-1 sm:px-3 w-3"
                onClick={prevSlide}
              >
                <svg
                  viewBox="0 0 17 35"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-w-full h-auto"
                >
                  <path
                    d="M2 18.0107L15 32.5107"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 3L2 17.5"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="sm:w-[90vw] w-[80vw] mx-4 sm:mx-0">
              <div
                className={`flex flex-col sm:gap-4 gap-2 sm:pl-8 justify-center sm:w-[50vw] w-11/12 sm:text-left h-full`}
              >
                {renderContent(slide)}
              </div>
            </div>
            <div className="sm:w-[10vw] w-[5vw] flex justify-start">
              <button
                className="sm:w-10 sm:p-1 sm:px-3 w-3 rotate-180"
                onClick={nextSlide}
              >
                <svg
                  viewBox="0 0 17 35"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-w-full h-auto"
                >
                  <path
                    d="M2 18.0107L15 32.5107"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 3L2 17.5"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
        <div className="flex gap-2 justify-center items-end w-full absolute sm:bottom-8 bottom-2">
          <div
            className={`w-4 h-4 rounded-full cursor-pointer border border-white ${
              currentSlide === 0 && 'bg-white'
            }`}
            onClick={() => setCurrentSlide(0)}
          ></div>
          <div
            className={`w-4 h-4 rounded-full cursor-pointer border border-white ${
              currentSlide === 1 && 'bg-white'
            }`}
            onClick={() => setCurrentSlide(1)}
          ></div>
          <div
            className={`w-4 h-4 rounded-full cursor-pointer border border-white ${
              currentSlide === 2 && 'bg-white'
            }`}
            onClick={() => setCurrentSlide(2)}
          ></div>
          <div
            className={`w-4 h-4 rounded-full cursor-pointer border border-white ${
              currentSlide === 3 && 'bg-white'
            }`}
            onClick={() => setCurrentSlide(3)}
          ></div>
          <div
            className={`w-4 h-4 rounded-full cursor-pointer border border-white ${
              currentSlide === 4 && 'bg-white'
            }`}
            onClick={() => setCurrentSlide(4)}
          ></div>
        </div>
      </div>
    </div>
  );
};
