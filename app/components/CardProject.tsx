import React, { FC } from "react";
import Ayam from "../assets/images/Ayam.png";
import Image from "next/image";

interface Iproject {
  project?: any;
}

const CardProject: FC<Iproject> = ({ project }) => {
  return (
    <div className="flex flex-col gap-4  shadow-lg">
      {project.image}
      <span className="text-slate-100 font-semibold text-lg">
        {project.description}
      </span>
      <span className="text-gray-400 font-semibold text-sm">
        {project.description}
      </span>
    </div>
  );
};

export default CardProject;
