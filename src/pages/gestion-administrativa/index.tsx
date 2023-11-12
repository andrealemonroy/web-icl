import { SectionBanner } from '../../components/SectionBanner';
import { Layout } from '../../components/Layout';
import { GestionNormativaData } from '../../utils/data';
import { useState } from 'react';

export default function GestionAdministrativa({ slug }: any) {
  const [openMenu, setOpenMenu] = useState(false);
  const item = GestionNormativaData.find((item) => item.id == slug);

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
          <div className="sm:px-20 py-12 px-8">
            <div className="flex justify-between gap-12">
              <h3 className="font-acto text-4xl text-primary">
                {item.titleContent}
              </h3>
            </div>
            <div className="mt-4">{item.content()}</div>
          </div>
        </>
      )}
    </Layout>
  );
}