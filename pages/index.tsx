import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yatsi</title>
        <meta name="description" content="Yatsi" />
        <link rel="icon" href="favicon.ico" />
      </Head>
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
          src="/images/landing/landing_3.png"
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
            className="absolute flex justify-center items-center border-2 bg-transparent rounded-xl text-center font-sans font-semibold text-2xl text-white"
          >
            ¡Fuerza Yatsi <br></br> para que llegue a tu destino!
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
