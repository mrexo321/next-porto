import React from "react";
import Button from "./Button";

const Introduce = () => {
  return (
    <div className="flex justify-center">
      <div className="py-32 space-y-7 sm:max-w-2xl">
        <div className="flex flex-col">
          <span className="text-slate-200 text-center font-semibold text-3xl md:text-6xl">
            Hi, Im Maulana Ikhsan
          </span>
          <span className="font-semibold text-transparent bg-clip-text uppercase text-2xl text-center md:text-5xl bg-gradient-to-r from-purple-600 to-pink-700">
            Full stack developer
          </span>
        </div>
        <h2 className="md:text-lg text-base font-semibold tracking-tight">
          Just a curious guy about web developer and much more , INFJ guy , cat
          lovers , like music so much , and video games especially. feel free to
          contact me here :)
        </h2>
        <div className="flex items-center justify-center gap-8">
          <Button className="bg-white text-slate-800 hover:bg-black hover:text-slate-100 transition duration-200">
            Read my blogs
          </Button>
          <Button className="bg-gray-900 text-slate-100 transition duration-200">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
