import Link from "next/link";
import React, { FC } from "react";
import Separator from "./Separator";

type Trigger = {
  trigger: any;
};

interface Inav {
  name: string;
  link: string;
}

interface MobileNavModalProps extends Trigger {
  navLinks: Inav[];
}
const MobileNavModal: FC<MobileNavModalProps> = ({ trigger, navLinks }) => {
  return (
    <div className="sm:hidden fixed inset-0 w-full transition duration-200">
      <div className="absolute inset-0 right-0 w-full bg-black">
        <ul className="absolute bg-black grid w-full gap-3 px-10 py-16">
          {navLinks.map((nav, index) => (
            <li className="space-y-4 font-semibold text-lg" key={index}>
              <Link href={nav.link}>{nav.name}</Link>
              <Separator />
            </li>
          ))}
        </ul>
        <button
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => trigger(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width={36}
            height={36}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MobileNavModal;
