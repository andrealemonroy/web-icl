import React from 'react';
import { Layout } from '../../components/Layout';
import { SectionBanner } from '../../components/SectionBanner';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const form = useForm();
  return (
    <Layout>
      <SectionBanner
        title="Contáctanos"
        description="Si tienes alguna pregunta, comentario o sugerencia, estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros. "
        caption="Contacto"
      />
      <section className="py-12 mx-20">
        <div className="font-acto text-4xl text-primary">
          Información de Contacto
        </div>
        <div className="font-lato">
          {/* Dirección */}
          <div className="my-4">
            <strong className="text-primary">Dirección:</strong> Jr. Conde de
            Superunda 303, Cercado de Lima, Lima, Perú
          </div>

          {/* Correo */}
          <div className="my-4">
            <strong className="text-primary">Correo Electrónico:</strong>{' '}
            consultas@icl.gob.pe
          </div>

          {/* Teléfonos */}
          <div className="my-4 flex">
            <strong className="text-primary">Teléfonos:</strong>
            <ul className="ml-2">
              <li>(01) 480 1582</li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="my-4 font-lato">
            <strong className="text-primary font-acto text-4xl">
              Redes Sociales:
            </strong>
            <ul className="mt-2">
              <li>
                <Link
                  to="https://www.facebook.com/instcatastraldelima"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-primary">Facebook :</span>{' '}
                  https://www.facebook.com/instcatastraldelima
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/instcatastraldelima/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-primary">Instagram:</span>{' '}
                  https://www.instagram.com/instcatastraldelima/
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/@InstitutoCatastraldeLimaICL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-primary">Youtube:</span>{' '}
                  https://www.youtube.com/@InstitutoCatastraldeLimaICL
                </Link>
              </li>
              <li>
                <Link
                  to="https://api.whatsapp.com/send?phone=969670703"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-primary">Whatsapp:</span>{' '}
                  https://api.whatsapp.com/send?phone=969670703
                </Link>
              </li>
            </ul>
          </div>

          {/* Números de Contacto de los Gerentes */}
          <div className="my-4">
            <strong className="font-acto text-4xl text-primary">
              Contacto con Gerencias:
            </strong>
            <ul className="font-lato mt-4 flex flex-col gap-2"></ul>
          </div>
        </div>

        {/* Mapa de Ubicación */}
        <div className="my-4 flex sm:flex-row flex-col w-full gap-4">
          <div className="w-full">
            <strong className="text-4xl font-acto text-primary">
              Formulario de Contacto:
            </strong>
            <form className="mt-2">
              <div className="mb-4">
                <Input
                  labelText="Nombre:"
                  placeholderText="Ingrese su nombre"
                  {...form.register('name')}
                  type="text"
                />
              </div>
              <div className="mb-4">
                <Input
                  labelText="Correo:"
                  placeholderText="Ingrese su correo"
                  {...form.register('email')}
                  type="email"
                />
              </div>
              <div className="mb-4">
                <Input
                  labelText="Asunto:"
                  placeholderText="Ingrese el asunto"
                  {...form.register('subject')}
                  type="text"
                />
              </div>
              <Button>Enviar Formulario</Button>
            </form>
          </div>
          <div className="w-full">
            <strong className="text-4xl font-acto text-primary">
              Mapa de Ubicación:
            </strong>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.9930982704077!2d-77.03537898875422!3d-12.043995541801166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b584a80c45%3A0xaa40599a6e3dabbb!2sInstituto%20Catastral%20de%20Lima%20-ICL!5e0!3m2!1ses-419!2spe!4v1696559636626!5m2!1ses-419!2spe"
              width="100%"
              height="600"
              style={{ border: '0' }}
              loading="lazy"
              className="mt-2"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}
