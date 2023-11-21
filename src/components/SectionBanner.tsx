import React, { FC, useEffect, useState } from 'react';
import { Button } from './Button';

interface Props {
  title: string;
  description: string;
  image?: string;
  buttonText?: string;
  caption: string;
  titlePage?: string;
}

export const SectionBanner: FC<Props> = ({
  title,
  description,
  image,
  buttonText,
  caption,
  titlePage,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      <div
        className={`sm:h-fit py-12 w-full bg-gradient-to-r from-primary from-5% via-[#0066AB] via-30% to-transparent flex z-5 relative overflow-hidden ${
          loaded ? 'opacity-100' : 'opacity-0'
        } duration-2000 ease-in-out`}
      >
        <div className="flex flex-col justify-center items-start sm:px-20 px-8 w-full gap-4 sm:w-2/3">
          <p
            className={`sm:text-xl text-md text-white font-acto font-extralight -mb-4 ${
              loaded ? 'opacity-100' : 'opacity-0'
            } duration-2000 ease-in-out`}
          >
            {caption}
          </p>
          <h1 className="sm:text-6xl text-4xl text-white font-bold font-acto">
            {title}
          </h1>
          <p className="text-white sm:text-xl text-md text-left font-lato">
            {description}
          </p>
          {buttonText && (
            <div className="w-64">
              <Button>Accede a nuestros servicios</Button>
            </div>
          )}
        </div>
        {image && (
          <div className="absolute -right-[5vw] bottom-8 h-[320px] max-w-[440px] w-full overflow-hidden sm:block hidden">
            <img src={image} alt={title} className="w-full h-80" />
          </div>
        )}
      </div>

      {titlePage && (
        <div className="sm:mx-20 mx-8 py-12">
          <h3 className="font-acto text-4xl text-primary">
            {titlePage || title}
          </h3>
        </div>
      )}
    </div>
  );
};
