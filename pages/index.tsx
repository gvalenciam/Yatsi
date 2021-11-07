import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Header } from "../components/header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yatsi</title>
        <meta name="description" content="Yatsi" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header></Header>
      <div className="relative">
        <Image
          src="/images/landing/landing_1.1.png"
          width="1920"
          height="1080"
          layout="responsive"
          alt="landing_1"
          objectFit="cover"
        ></Image>
      </div>

      <div className="relative">
        <Image
          src="/images/landing/landing_2.png"
          width="1920"
          height="2165"
          layout="responsive"
          alt="landing_2"
          objectFit="cover"
        ></Image>
      </div>

      <div className="relative">
        <Image
          src="/images/landing/landing_3.1.png"
          width="1920"
          height="1639"
          layout="responsive"
          alt="landing_3"
          objectFit="cover"
        ></Image>
        <Link href="https://nextjs.org/docs/basic-features/font-optimization">
          <a
            target="_blank"
            style={{ top: "35%", right: "12%", width: "30%", height: "8%" }}
            className="absolute flex justify-center items-center border-2 bg-transparent xs:rounded-md 2xl:rounded-xl text-center font-sans font-bold xs:text-4xs sm:text-sm 2xl:text-2xl text-white"
          >
            ¡Fuerza Yatsi <br></br> para que llegue a tu destino!
          </a>
        </Link>
        <Link href="https://instagram.com/yatsicortometraje?utm_medium=copy_link">
          <a
            target="_blank"
            style={{
              top: "60%",
              left: "50%",
              width: "30%",
              height: "3%",
              transform: "translateX(-50%)",
            }}
            className="text-yatsi-primary absolute flex justify-center items-center bg-transparent text-center font-sans font-bold xs:text-3xs 2xl:text-4xl"
          >
            @yatsicortometraje
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
