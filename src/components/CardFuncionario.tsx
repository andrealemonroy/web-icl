import React, { FC } from 'react';
import { Funcionario } from '../pages/sobre-nosotros/funcionarios';
import { Button } from './Button';
interface CardFuncionarioProps extends Funcionario {
  index: number;
}

const CardFuncionario: FC<CardFuncionarioProps> = ({
  index,
  ...funcionario
}) => {
  const flexDirection = index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse';

  return (
    <div
      className={`flex flex-col ${flexDirection} items-center md:items-start mb-8 border border-2 border-primary rounded-md`}
    >
      <div className="sm:w-4/12">
        <img
          src={funcionario.image}
          alt={funcionario.name_funcionario}
          className={`w-full h-auto ${
            index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
          }`}
        />
      </div>
      <div className="sm:w-8/12 md:ml-8 flex flex-col justify-center my-auto gap-2 px-4 sm:px-0 pb-4 sm:pt-0 pt-4">
        <h3 className="text-2xl font-acto text-primary">
          {funcionario.position}
        </h3>
        <p className="font-lato text-2xl">{funcionario.name_funcionario}</p>
        <div className="sm:w-40 mt-2">
          <Button onClick={() => window.open(funcionario.link, '_blank')}>
            Ver perfil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardFuncionario;
