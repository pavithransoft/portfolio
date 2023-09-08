"use client";

import { AiOutlineBlock } from "react-icons/ai";
import { PiGithubLogo } from "react-icons/pi";
import { RiLinkedinLine } from "react-icons/ri";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import Link from "next/link";

const TopMenu = (props) => {
  return (
    <div className="sticky top-0 z-50 h-20 border-b backdrop-blur grid grid-cols-2">
      <span className="grid grid-cols-2 items-center sm:gap-5">
        <AiOutlineBlock className="w-12 h-12 justify-self-center sm:justify-self-end" />
        <h1 className="text-2xl font-semibold font-mono">Portfolio</h1>
      </span>
      <span className="grid grid-cols-3 gap-3 sm:gap-5 items-center justify-self-end px-5 sm:px-32">
        <Link href={"https://github.com/pavithransoft"}>
          <PiGithubLogo className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
        </Link>
        <Link href={"https://in.linkedin.com/in/pavithran-gopalakrishnan"}>
          <RiLinkedinLine className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
        </Link>
        {props.onClicked ? (
          <BsMoonStarsFill
            className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer fill-white"
            onClick={props.onTheme}
          />
        ) : (
          <BsSunFill
            className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer fill-yellow-500"
            onClick={props.onTheme}
          />
        )}
      </span>
      <Link
        href={"/profile"}
        className="absolute top-24 right-3 text-sm sm:text-base font-mono py-1 sm:py-0"
      >
        <span
          className={`border-y border-l rounded-l-lg shadow p-1 px-2 sm:p-2 ${
            props.onClicked
              ? "border-white bg-white text-black"
              : "border-black bg-black text-white"
          }`}
        >
          go-to
        </span>
        <span
          className={`border-y border-r border-black rounded-r-lg shadow p-1 px-2 sm:p-2 ${
            props.onClicked
              ? "border-white bg-black text-white"
              : "border-black bg-white text-black"
          }`}
        >
          Profile
        </span>
      </Link>
    </div>
  );
};

export default TopMenu;
