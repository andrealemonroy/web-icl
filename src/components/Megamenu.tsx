import { FC, useEffect, useState } from 'react';
import { categoriesMegamenu } from '../utils/data';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface MegaMenuProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MegaMenu: FC<MegaMenuProps> = ({ openMenu, setOpenMenu }) => {
  const [firstChildren, setFirstChildren] = useState<any>(
    categoriesMegamenu[0].children
  );
  const [secondChildren, setSecondChildren] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<any>(
    categoriesMegamenu[0]
  );
  const router = useNavigate();
  const url = useLocation();

  useEffect(() => {
    if(url.hash.includes('recursos')){
      setFirstChildren(categoriesMegamenu[1].children)
      setSelectedCategory(categoriesMegamenu[1])
    } else if(url.hash.includes('servicios')){
      setFirstChildren(categoriesMegamenu[0].children)
      setSelectedCategory(categoriesMegamenu[0])
    }
  }, [url]);

  return (
    <div
      className={`megamenu-slide absolute sm:top-24 top-12 w-screen z-0 h-unset bg-lightBlue flex-col ${
        openMenu ? ' active sm:flex z-10' : 'one-time-fade-out opacity-0 z-0 hidden'
      }`}
      style={{ transitionDelay: openMenu ? '0ms' : '1000ms' }}
    >
      <div className="flex sm:px-16 sm:h-[calc(100vh-176px)]">
        <div
          id="first-column"
          className="flex flex-col sm:w-1/3 transition-all transform overflow-y-scroll"
        >
          {categoriesMegamenu.map((category) => {
            return (
              <div
                key={category.id}
                className={`my-6 ml-4 megamenu-item ${
                  selectedCategory?.id === category.id &&
                  firstChildren?.length > 0
                    ? 'opacity-100'
                    : 'opacity-50 '
                }`}
                id={category.slug}
              >
                <div
                  className="cursor-pointer flex items-center gap-4"
                  onClick={() => {
                    if (category.link) {
                      setOpenMenu(false);
                      router(category.link)
                    } else {
                      JSON.stringify(category.children) ==
                      JSON.stringify(firstChildren)
                        ? setFirstChildren([])
                        : setFirstChildren(category.children);
                      setSecondChildren([]);
                      setSelectedCategory(category);
                    }
                  }}
                >
                  <span
                    className={`font-acto text-primary text-3xl category-name  ${
                      selectedCategory?.id === category.id &&
                      firstChildren?.length > 0
                        ? 'selected 0.5s ease-in-out infinite alternate'
                        : ''
                    }`}
                  >
                    {category.name}
                  </span>
                  <div
                      className={`${
                        selectedCategory?.id === category.id &&
                        firstChildren?.length > 0
                          ? 'block sm:hidden'
                          : 'hidden'
                      }`}
                    >
                    <svg
                      className="transition-transform duration-300 ease-in-out transform rotate-90 w-5"
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
                  </div>
                </div>
                <div className="sm:hidden block">
                  {JSON.stringify(category.children) ==
                    JSON.stringify(firstChildren) &&
                    firstChildren?.map((category: any) => (
                      <div key={category.id} className="my-4">
                        {category.link ? (
                          <Link to={category.link}>
                            <div
                              className="cursor-pointer flex flex-col gap-2"
                              onClick={() => {
                                setOpenMenu(false);
                              }}
                            >
                              <div className="flex gap-4">
                                <span className="text-primary font-acto text-2xl ">
                                  {category.name}
                                </span>
                                <img
                                  src="/images/arrow.svg"
                                  width={20}
                                  height={20}
                                  alt="flecha"
                                />
                              </div>
                              <div className="text-md font-lato font-light sm:block hidden">
                                {category.description}
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <div
                            className="cursor-pointer flex flex-col gap-2"
                            onClick={() => {
                              setSecondChildren(category.children);
                            }}
                          >
                            <div className="flex gap-4">
                              <span className="text-primary font-acto text-2xl ">
                                {category.name}
                              </span>
                              <img
                                src="/images/arrow.svg"
                                width={20}
                                height={20}
                                alt="flecha"
                              />
                            </div>
                            <div className="text-md font-lato font-light">
                              {category.description}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
        <div
          id="second-column"
          className="flex-col w-2/3 px-12 overflow-scroll h-full mt-4 sm:flex hidden pb-4"
        >
          {firstChildren?.length > 0 &&
            firstChildren?.map((category: any) => (
              <div key={category.id} className="my-4 ml-4">
                {category.link ? (
                  <Link
                    to={category.link}
                    target={category.link.includes('http') ? '_blank' : ''}
                  >
                    <div
                      className="cursor-pointer flex flex-col gap-2"
                      onClick={() => {
                        setOpenMenu(false);
                      }}
                    >
                      <div className="flex gap-4">
                        <span className="text-primary font-acto text-2xl ">
                          {category.name}
                        </span>
                        <img
                          src="/images/arrow.svg"
                          width={20}
                          height={20}
                          alt="flecha"
                        />
                      </div>
                      <div className="text-md font-lato font-light">
                        {category.description}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div
                    className="cursor-pointer flex flex-col gap-2"
                    onClick={() => {
                      setSecondChildren(category.children);
                    }}
                  >
                    <div className="flex gap-4">
                      <span className="text-primary font-acto text-2xl ">
                        {category.name}
                      </span>
                      <img
                        src="/images/arrow.svg"
                        width={20}
                        height={20}
                        alt="flecha"
                      />
                    </div>
                    <div className="text-md font-lato font-light">
                      {category.description}
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-start mt-4 w-full h-16 items-center sm:px-20 px-4 border-t-2 border-white">
        <p className="font-acto text-lg text-primary sm:mr-12">
          Links de interés
        </p>
        <div className="flex flex-col gap-8 ml-4">
          <Link to="/contacto">
            <span className="text-primary text-2xl font-semibold hover:text-gray-900 cursor-pointer">
              Contáctanos
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MegaMenu;
