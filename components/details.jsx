"use client";

import Image from "next/image";
import { IoMdHand } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Intro from "@/assets/intro.svg";

const Details = () => {
  return (
    <div className="p-2">
      <div className="pt-10 font-semibold font-nunito">
        <div className="px-1 sm:px-12 lg:px-32 relative">
          <span className="text-2xl sm:text-4xl grid grid-cols-2 w-fit text-blue-500">
            <h1 className="font-bold">
              Hai<span className="text-yellow-500 px-1">!</span>
            </h1>
            <IoMdHand className="mx-1 animate-wave fill-orange-200" />
          </span>
          <h1 className="text-xl sm:text-2xl pt-1">{`I'm Pavithran Gopalakrishnan`}</h1>
          <h1 className="text-sm sm:text-lg font-mono font-normal underline underline-offset-4 pt-3">
            Software Engineer With Experience In Web Application Development.
          </h1>
          <div className="grid sm:grid-cols-2 w-fit gap-3 sm:gap-10 pt-8 text-sm place-items-center">
            <span className="grid grid-flow-col gap-4 items-center place-items-center border w-fit p-1 sm:p-2 rounded-md shadow border-red-500">
              <BiLogoGmail className="w-6 h-6 cursor-pointer fill-red-500" />
              <h1 className="text-red-500">Gmail</h1>
              <h1 className="px-3 border-l border-red-500">
                pavithran.soft@gmail.com
              </h1>
            </span>
            <span className="grid grid-flow-col gap-4 items-center place-items-center border w-fit p-1 sm:p-2 rounded-md shadow border-green-500">
              <FaWhatsapp className="w-6 h-6 cursor-pointer fill-green-500" />
              <h1 className="text-green-500">WhatsApp</h1>
              <h1 className="px-3 border-l border-green-500">
                +91 - 8012322922
              </h1>
            </span>
          </div>
          <span className="absolute top-0 right-32 hidden xl:block">
            <Image
              src={Intro}
              width={500}
              height={500}
              alt="Intro"
              className="rounded-full"
            />
          </span>
        </div>
        <h1 className="text-lg sm:text-2xl font-bold px-2 sm:px-5 lg:px-14 p-8 underline underline-offset-4">
          Skills
        </h1>
        <div className="font-mono grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center whitespace-pre px-5 sm:px-8 lg:px-20 text-[0.8rem] sm:text-base">
          <span className="p-2 border rounded-md shadow">HTML 5</span>
          <span className="p-2 border rounded-md shadow">CSS 3</span>
          <span className="p-2 border rounded-md shadow">Java Script</span>
          <span className="p-2 border rounded-md shadow">React JS</span>
          <span className="p-2 border rounded-md shadow">Next JS</span>
          <span className="p-2 border rounded-md shadow">Tailwind CSS</span>
          <span className="p-2 border rounded-md shadow">Next Auth</span>
          <span className="p-2 border rounded-md shadow">Mongo DB</span>
          <span className="p-2 border rounded-md shadow">Sass</span>
          <span className="p-2 border rounded-md shadow">Node JS</span>
          <span className="p-2 border rounded-md shadow">React Hook Form</span>
          <span className="p-2 border rounded-md shadow">Zod</span>
          <span className="p-2 border rounded-md shadow">Yup</span>
          <span className="p-2 border rounded-md shadow">Redux</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
