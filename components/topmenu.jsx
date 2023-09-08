"use client";

import { AiOutlineBlock } from "react-icons/ai";
import { PiGithubLogo } from "react-icons/pi";
import { RiLinkedinLine } from "react-icons/ri";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

const TopMenu = (props) => {
  return (
    <div className="sticky top-0 z-50 h-20 border-b backdrop-blur grid grid-cols-2">
      <span className="grid grid-cols-2 items-center sm:gap-5">
        <AiOutlineBlock className="w-12 h-12 justify-self-center sm:justify-self-end" />
        <h1 className="text-2xl font-semibold font-mono">Portfolio</h1>
      </span>
      <span className="grid grid-cols-3 gap-3 sm:gap-5 items-center justify-self-end px-5 sm:px-32">
        <PiGithubLogo className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
        <RiLinkedinLine className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
        {props.onClicked ? (
          <BsMoonStarsFill className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer fill-white" />
        ) : (
          <BsSunFill className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer fill-yellow-500" />
        )}
      </span>
    </div>
  );
};

export default TopMenu;
