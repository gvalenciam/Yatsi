import React from "react";
import Link from "next/link";
import Image from "next/image";

interface headerProps {}

interface Menu {
  nombre: string;
  href: string;
}

export const Header: React.FC<headerProps> = ({}) => {
  let menus: Menu[] = [
    { nombre: "LA HISTORIA", href: "/" },
    { nombre: "#FUERZAYATSI", href: "/" },
  ];

  let renderMenus = (menus: Menu[]): JSX.Element[] => {
    return menus.map((menu) => {
      return (
        <Link href={menu.href} key={menu.nombre}>
          <a className="text-white lg:mr-8 last:mr-0 font-sans font-bold 2xl:text-lg">
            {menu.nombre}
          </a>
        </Link>
      );
    });
  };

  return (
    <div className="bg-black lg:px-24 lg:py-6 sticky flex justify-between items-center">
      <Link href="/">
        <a className="2xl:h-12 2xl:w-10 relative">
          <Image
            src="/images/logo/logo_menu.png"
            layout="fill"
            objectFit="contain"
            alt="logo-yatsi"
          ></Image>
        </a>
      </Link>
      <div>{renderMenus(menus)}</div>
    </div>
  );
};
