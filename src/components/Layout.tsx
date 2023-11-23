import React, { FC, useState, useEffect, Dispatch } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import MegaMenu from './Megamenu';
import { categoriesMegamenu } from '../utils/data';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  openMenu?: boolean;
  setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Layout: FC<LayoutProps> = ({
  children,
  openMenu,
  setOpenMenu,
}) => {
  const [openMenuLayout, setOpenMenuLayout] = useState(openMenu || false);
  const [openSearch, setOpenSearch] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const [results, setResults] = useState<any>([]);
  const [mouseOver, setMouseOver] = useState('');
  const router = useNavigate();

  const findInData = (text: string) => {
    const results: {
      name: string;
      description?: string;
      link: string;
    }[] = [];

    categoriesMegamenu.forEach((category) => {
      // Search within children of each category
      category?.children?.forEach((item) => {
        if (
          item.name.toLowerCase().includes(text.toLowerCase()) ||
          (item.description &&
            item.description.toLowerCase().includes(text.toLowerCase()))
        ) {
          results.push(item);
        }
      });
    });
    setResults(results);
    return results;
  };

  useEffect(() => {
    findInData(textSearch);
  }, [textSearch]);

  return (
    <div className="overflow-x-hidden">
      <Navbar
        openMenu={openMenu || openMenuLayout}
        setOpenMenu={setOpenMenu || setOpenMenuLayout}
        setOpenSearch={setOpenSearch}
      />
      <MegaMenu
        openMenu={openMenu || openMenuLayout}
        setOpenMenu={setOpenMenu || setOpenMenuLayout}
      />
      {openSearch && (
        <div className="fixed z-50 inset-0 overflow-y-auto px-4 sm:px-0 pt-8 sm:pt-0">
          <div className="flex items-end justify-center min-h-[70vh] pt-4 pb-20 text-center">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>

            <div className="inline-block bg-white rounded-md text-left overflow-hidden shadow-xl transform transition-all align-middle max-w-lg w-full">
              <div className="bg-white">
                <div className="sm:flex sm:items-start">
                  <div className="text-center sm:mt-0 sm:text-left w-full">
                    <div className="bg-white z-50 flex items-center justify-between shadow-md sm:w-full h-[96px] min-h-[96px]">
                      <input
                        className="w-full bg-transparent outline-none text-primary text-lg sm:text-[1.5vw] font-acto px-8"
                        type="text"
                        placeholder="Buscar"
                        onChange={(e) => setTextSearch(e.target.value)}
                      />
                      <div
                        className="flex gap-4 cursor-pointer items-center h-full transition-transform duration-300 ease-in-out justify-center w-fit sm:w-[12vw]"
                        onClick={() => setOpenSearch(false)}
                      >
                        <img
                          src="/images/pagina-1/Search.svg"
                          alt="Buscar"
                          width={32}
                          height={32}
                        />
                        <div className="sm:mr-0 mr-4">
                          <button
                            onClick={() => {
                              setOpenSearch(false);
                              setTextSearch('');
                            }}
                            type="button"
                            className="pt-2 border border-transparent"
                          >
                            <svg
                              className="transition-transform duration-300 ease-in-out transform rotate-0"
                              width="27"
                              height="26"
                              viewBox="0 0 27 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line
                                x1="1.70711"
                                y1="1.29289"
                                x2="25.7071"
                                y2="25.2929"
                                stroke="#16236E"
                                strokeWidth="2"
                              />
                              <line
                                x1="1.29289"
                                y1="25.2929"
                                x2="25.2929"
                                y2="1.29289"
                                stroke="#16236E"
                                strokeWidth="2"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-y-auto max-h-[70vh] sm:max-h-[20vh] w-full bg-white border-t-2 border-t-primary">
                      {results.length > 0 &&
                        results.map(
                          (result: any, index: any | null | undefined) => (
                            <div
                              key={index}
                              className="flex flex-col justify-center px-8 py-2 cursor-pointer hover:bg-primary hover:!text-white"
                              onClick={() => {
                                setOpenSearch(false);
                                result.link.includes('http')
                                  ? window.open(result.link, '_blank')
                                  : router(result.link);
                              }}
                              onMouseEnter={() => setMouseOver(index)}
                              onMouseLeave={() => setMouseOver('')}
                            >
                              <div className="flex gap-4">
                                <span
                                  className={`font-acto text-2xl text-primary ${
                                    mouseOver === index ? 'text-white' : ''
                                  }`}
                                >
                                  {result.name}
                                </span>
                                <div className="flex items-center justify-center">
                                  <svg
                                    width="21"
                                    height="16"
                                    viewBox="0 0 21 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                                      fill={
                                        mouseOver === index ? '#fff' : '#16236E'
                                      }
                                    />
                                  </svg>
                                </div>
                              </div>
                              <p className="font-lato text-lg text-left">
                                {result.description}
                              </p>
                            </div>
                          )
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`${openMenu ? 'hidden' : 'block'} sm:mt-[140px] mt-[56px]`}
      >
        {children}
      </div>
      <div className={`${openMenu ? 'hidden' : 'block'}`}>
        <Footer openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </div>
  );
};
