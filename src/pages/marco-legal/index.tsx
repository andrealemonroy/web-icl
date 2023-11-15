import React from 'react';
import { SectionBanner } from '../../components/SectionBanner';
import { Layout } from '../../components/Layout';
import { LeyMarcoLegalData } from '../../utils/data';

export default function LeyDeMarcoLegal({ slug }: any) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const downloadLaw = (url: string) => {
    window.open(url, '_blank');
  };
  const item = LeyMarcoLegalData.find((item) => item.id == slug);

  return (
    <Layout openMenu={openMenu} setOpenMenu={setOpenMenu}>
      {item && (
        <>
          <SectionBanner
            key={item.id}
            caption={item.caption}
            title={item.title}
            description={item.description}
          />
          <div className="sm:px-20 px-8 py-12">
            <div className="flex sm:flex-row flex-col justify-between sm:gap-12 gap-4">
              <h3 className="font-acto text-4xl text-primary">
                {item.titleContent}
              </h3>
              {item.download && (
                <div
                  className=" bg-primary text-white rounded-sm font-acto flex gap-4 items-center justify-center font-acto h-[75px] sm:w-[378px] text-lg cursor-pointer"
                  onClick={() => downloadLaw(item.download)}
                >
                  {/* <img src="/images/download.svg" alt="download" /> */}
                  <img
                    src="/images/download.svg"
                    alt="download"
                    width={20}
                    height={20}
                  />
                  <span>{item.buttonText}</span>
                </div>
              )}
            </div>
            <div className="mt-4">{item.content()}</div>
          </div>
        </>
      )}
    </Layout>
  );
}