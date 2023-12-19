import {
  Card,
  CardBody,
  Link,
  ScrollShadow,
  Skeleton,
} from "@nextui-org/react";
import React from "react";
import UserComponent from "./UserComponent";
import Image from "next/image";

import ExcelToJSON from "@/assets/proyects/ExcelToJSON.png";
import DrumpUI from "@/assets/proyects/DrumpUI.png";
import DrumpUIComp from "@/assets/proyects/DrumpUIComp.png";
import NsFrontend from "@/assets/proyects/NsFrontend.png";
import Nutrixya from "@/assets/proyects/Nutrixya.png";
import DrumpFinance from "@/assets/proyects/DrumpFinance.png";
import Portfolio from "@/assets/proyects/Portfolio.png";
import ButtonLike from "./HeartComponentButton";

const FeedSection = ({ isLoaded }) => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    window.scrollTo({
      top: 999,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full h-auto">
      {!isLoaded ? (
        <ScrollShadow
          hideScrollBar
          className="w-full h-screen space-y-5 py-10 px-10"
        >
          <Skeleton isLoaded={isLoaded} className="rounded-lg px-10 py-16" />
          <Skeleton isLoaded={isLoaded} className="rounded-lg px-10 py-20" />
          <Skeleton isLoaded={isLoaded} className="rounded-lg px-10 py-32" />
          <Skeleton isLoaded={isLoaded} className="rounded-lg px-10 py-20" />
          <Skeleton isLoaded={isLoaded} className="rounded-lg px-10 py-32" />
        </ScrollShadow>
      ) : (
        <ScrollShadow
          hideScrollBar
          className="w-full h-screen space-y-5 py-10 px-10"
        >
          <Card className="w-full text-sm md:text-base">
            <CardBody className="space-y-5">
              <UserComponent />

              <p>¡Bienvenidos!</p>

              <p>
                Este es mi portfolio, aquí publico todo mi trabajo y de vez en
                cuando algún tutorial.
              </p>

              <p>
                {" "}
                Si estás interesado en saber más de mí, puedes escribirme a mi
                nuevo{" "}
                <Link
                  href="https://twitter.com/NicoSchonfeld__"
                  target="_blank"
                  color="secondary"
                  className="underline"
                >
                  Twitter
                </Link>{" "}
                o por mis otras{" "}
                <span
                  className="text-purple-500 hover:text-purple-600 underline cursor-pointer transition-all"
                  onClick={() => scrollDown()}
                >
                  redes sociales
                </span>
                .
              </p>

              <ButtonLike />
            </CardBody>
          </Card>

          <Card className="w-full text-sm md:text-base">
            <CardBody className="space-y-5">
              <UserComponent />

              <p>Mi Portfolio.</p>

              <p>
                Deploy:{" "}
                <Link
                  href="https://nicoschonfeld.vercel.app"
                  target="_blank"
                  color="secondary"
                >
                  Nico Schönfeld
                </Link>
              </p>

              <Image
                src={Portfolio}
                width={1080}
                height={1080}
                alt="Portfolio"
                className="object-cover h-[200px] md:h-[400px] w-full rounded-md border border-gray-50/20"
              />

              <ButtonLike />
            </CardBody>
          </Card>

          <Card className="w-full text-sm md:text-base">
            <CardBody className="space-y-5">
              <UserComponent />

              <p>Nutrixya 🌱</p>

              <p>
                La plataforma que te ayudará a nutrir tus cultivos de manera
                ágil y sencilla logrando la máxima eficiencia en fertilización.
              </p>

              <p>
                Linkedin de Nutrixya:{" "}
                <Link
                  href="https://www.linkedin.com/company/nutrixya/"
                  target="_blank"
                  color="secondary"
                >
                  Nutrixya - Fertilización simple y eficiente.
                </Link>
              </p>

              <p>
                Deploy:{" "}
                <Link
                  href="https://www.nutrixyaweb.com/login"
                  target="_blank"
                  color="secondary"
                >
                  Nutrixya
                </Link>
              </p>

              <Image
                src={Nutrixya}
                width={1080}
                height={1080}
                alt="Nutrixya"
                className="object-cover h-[200px] md:h-[400px] w-full rounded-md border border-gray-50/20"
              />

              <ButtonLike />
            </CardBody>
          </Card>

          <Card className="w-full text-sm md:text-base">
            <CardBody className="space-y-5">
              <UserComponent />

              <p>Drump Finance 📈📉💸</p>

              <p>¿Sacamos la beta? 🤔😉</p>

              <Image
                src={DrumpFinance}
                width={1080}
                height={1080}
                alt="DrumpFinance"
                className="object-cover h-[200px] md:h-[400px] w-full rounded-md border border-gray-50/20"
              />

              <ButtonLike />
            </CardBody>
          </Card>

          <Card className="w-full text-sm md:text-base">
            <CardBody className="space-y-5">
              <UserComponent />

              <p>
                Construye tu sitio web con componentes de Tailwind CSS gratis.
              </p>

              <p>
                Me gusta mucho usar Tailwind en mis proyectos, pero siempre me
                pasa que tengo que hacer diseños desde cero. Si bien ya existen
                páginas así, decidí crear la mía con mis estilos personalizados.
              </p>

              <p>
                Deploy:{" "}
                <Link
                  href="https://drump-ui.vercel.app/"
                  target="_blank"
                  color="secondary"
                >
                  DRUMP UI
                </Link>
              </p>

              <Image
                src={DrumpUIComp}
                width={1080}
                height={1080}
                alt="DrumpUIComp"
                className="object-cover h-[200px] md:h-[400px] w-full rounded-md border border-gray-50/20"
              />

              <ButtonLike />
            </CardBody>
          </Card>

          <Card className="w-full text-sm md:text-base">
            <CardBody className="space-y-5">
              <UserComponent />

              <p>Holaa!! ¿Cómo están? 🙌🏻</p>

              <p>
                Quería compartir con ustedes esta herramienta que desarrolle
                para transforma un archivo Excel / Google Sheets a un archivo
                JSON.
              </p>

              <p>
                ¿Cómo funciona?🤔
                <br />
                Es fácil, simplemente tenés que tener descargado tu archivo
                .xlsx o .xls. <br />
                Luego ingresalo en el botón Subir archivo y listo! Se va a
                desplegar una tabla junto a un JSON que podés copiar.
              </p>

              <p>
                Deploy:{" "}
                <Link
                  href="https://exceltojson-ns.vercel.app"
                  target="_blank"
                  color="secondary"
                >
                  Exel to JSON
                </Link>
              </p>

              <Image
                src={ExcelToJSON}
                width={1080}
                height={1080}
                alt="ExcelToJSON"
                className="object-cover h-[200px] md:h-[400px] w-full rounded-md border border-gray-50/20"
              />

              <ButtonLike />
            </CardBody>
          </Card>

          <Card className="w-full text-sm md:text-base">
            <CardBody className="space-y-5">
              <UserComponent />

              <p>Drump UI 👀</p>

              <Image
                src={DrumpUI}
                width={1080}
                height={1080}
                alt="DrumpUI"
                className="object-cover h-[200px] md:h-[400px] w-full rounded-md border border-gray-50/20"
              />

              <ButtonLike />
            </CardBody>
          </Card>

          <Card className="w-full text-sm md:text-base">
            <CardBody className="space-y-5">
              <UserComponent />

              <p>NS Front-End</p>

              <p>Aprende las bases del Desarrollo web.</p>

              <p>
                Deploy:{" "}
                <Link
                  href="https://nsfrontend.vercel.app/"
                  target="_blank"
                  color="secondary"
                >
                  NS Front-End
                </Link>
              </p>

              <Image
                src={NsFrontend}
                width={1080}
                height={1080}
                alt="NsFrontend"
                className="object-cover h-[200px] md:h-[400px] w-full rounded-md border border-gray-50/20"
              />

              <ButtonLike />
            </CardBody>
          </Card>
        </ScrollShadow>
      )}
    </section>
  );
};

export default FeedSection;
