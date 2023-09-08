"use client";

import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <section className="grid place-items-center shadow px-6 py-20 border rounded-md">
      <div className="grid gap-4 sm:w-80 w-64">
        {children}
        <span className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <hr className="w-full" />
          <h1 className="whitespace-pre">OR CONTINUE WITH</h1>
          <hr className="w-full" />
        </span>
        <span className="grid grid-cols-2 gap-2">
          <button className="flex items-center justify-center gap-4 p-2 border rounded-md hover:bg-slate-100 text-sm">
            <FcGoogle className="w-5 h-5" />
            <h1>Google</h1>
          </button>
          <button className="flex items-center justify-center gap-4 p-2 border rounded-md hover:bg-slate-100 text-sm">
            <ImGithub className="w-[1.10rem] h-[1.10rem]" />
            <h1>Github</h1>
          </button>
        </span>
        <p className="text-xs text-center text-gray-500">
          By clicking continue, you agree to our
          <Link href={""} className="underline mx-1">
            Terms of Service
          </Link>
          and
          <Link href={""} className="underline ml-1">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default Layout;
