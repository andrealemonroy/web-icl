import React from 'react';
import CardFuncionario from '../../components/CardFuncionario';
import { SectionBanner } from '../../components/SectionBanner';
import { Layout } from '../../components/Layout';
import { useGetFuncionariosQuery } from '../../redux/reduxQuery/funcionarios';
import Loader from '../../components/Loader';

export interface Funcionario {
  image: string;
  name_funcionario: string;
  position: string;
  link: string;
}

export default function Funcionarios() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { data: funcionarios } = useGetFuncionariosQuery(
    'autorizado=1&activo=1'
  );
  if (!funcionarios) {
    return <Loader />;
  }
  return (
    <Layout openMenu={openMenu} setOpenMenu={setOpenMenu}>
      <div>
        <SectionBanner
          title="Consejo Directivo y Funcionarios"
          caption="Sobre nosotros"
          description="Presentamos a nuestros funcionarios comprometidos con la excelencia y el servicio público en el Instituto Catastral de Lima."
        />
        <div className="flex flex-col mx-8 sm:mx-20 py-12">
          {funcionarios?.map((funcionario: any, index: any) => (
            <CardFuncionario key={index} index={index} {...funcionario} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
