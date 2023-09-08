"use client";

import { useState } from "react";
import TopMenu from "@/components/topmenu";
import Details from "@/components/details";
import Layout from "@/components/form/layout";
import Login from "@/components/form/login";
import Register from "@/components/form/register";

export default function Home() {
  const [isClicked, setIsClicked] = useState(true);

  const handleTheme = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section className="min-h-screen">
      <TopMenu onClicked={isClicked} onTheme={handleTheme} />
      <Details />
      <section className="px-1 py-5">
        <h1 className="text-lg sm:text-2xl font-bold sm:px-5 lg:px-14 px-4 pt-6 pb-8 underline underline-offset-4">
          Projects
        </h1>
        <div className="grid lg:grid-cols-2 place-items-center gap-10">
          <Layout>
            <Login />
          </Layout>
          <Layout>
            <Register />
          </Layout>
        </div>
      </section>
    </section>
  );
}
