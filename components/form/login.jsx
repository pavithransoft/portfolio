"use client";

import React, { useEffect } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import LoginToggle from "./LoginToggle";

const Login = () => {
  const [passwordType, eye] = LoginToggle();

  const schema = z.object({
    email: z
      .string()
      .nonempty("Email is required")
      .email("Please enter valid email")
      .regex(
        new RegExp(
          "^[a-z]{1}[a-z0-9._-]+[a-z]+@+@?[a-z]{1}?.@?[a-z]+.?[a-z]{2,6}.?[a-z]{2,6}$"
        )
      ),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must contain at least 8 characters")
      .regex(
        new RegExp(
          "^(?=.*d{1})(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[!@#$%^&*{|}?~_=+.-]{1})(?=.*[^a-zA-Z0-9])(?!.*s).{8,12}$"
        ),
        "Password must match the following: One uppercase, lowercase, number, special characters min 8 max 12 characters length."
      )
      .max(12),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitData = (data) => {
    console.log("IT WORKED", data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <h1 className="font-medium text-center text-xl relative">
        Welcome back
        <span className="text-xs font-normal mx-2 text-gray-500">
          Enter your details.
        </span>
        <Link
          href={""}
          className="absolute -top-16 -right-2 text-sm hover:border px-2 py-1 hover:bg-slate-100 rounded-md"
        >
          Register
        </Link>
      </h1>
      <form className="grid gap-3" onSubmit={handleSubmit(submitData)}>
        <>
          <input
            type="text"
            placeholder="Email"
            className={`focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-500 border p-2 rounded-md placeholder:text-sm text-black ${
              errors.email?.message ? "border-red-500" : ""
            }`}
            {...register("email")}
            autoFocus
          />
          {errors.email && (
            <span
              className={`relative text-xs -mt-3 mx-2 ${
                errors.email?.message ? "text-red-500" : ""
              }`}
            >
              {errors.email?.message}
            </span>
          )}
        </>
        <>
          <div className="relative">
            <input
              type={passwordType}
              placeholder="Password"
              className={`focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-500 border p-2 rounded-md placeholder:text-sm text-black w-full ${
                errors.password?.message ? "border-red-500" : ""
              }`}
              {...register("password")}
            />
            {eye}
          </div>
          {errors.password && (
            <span
              className={`relative text-xs -mt-3 mx-2 ${
                errors.password?.message ? "text-red-500" : ""
              }`}
            >
              {errors.password?.message}
            </span>
          )}
        </>
        <button
          type="submit"
          className="p-2 border rounded-md bg-black text-white text-sm"
        >
          Sign In
        </button>
      </form>
    </>
  );
};

export default Login;
