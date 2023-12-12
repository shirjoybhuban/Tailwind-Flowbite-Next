import React from "react";

export const Title = ({ heading }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[#08085E] inline-block text-[1.8rem] font-bold mb-1">
        {heading}
      </h1>
      <div className="bg-primary-500 h-0.5 w-[45px] mt-1"></div>
    </div>
  );
};
