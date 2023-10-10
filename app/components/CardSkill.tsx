import React, { FC } from "react";

interface Iskill {
  skill?: any;
}

const CardSkill: FC<Iskill> = ({ skill }) => {
  return (
    <div className="bg-gray-950 rounded-lg p-8 flex flex-col gap-4 border border-gray-800 shadow-lg">
      {skill.svg}
      <span className="text-slate-100 font-semibold text-lg">{skill.name}</span>
      <span className="text-gray-400 font-semibold text-sm">
        {skill.description}
      </span>
    </div>
  );
};

export default CardSkill;
