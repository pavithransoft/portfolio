"use client";

import { useState } from "react";
import {
  HiOutlineShieldCheck,
  HiOutlineShieldExclamation,
} from "react-icons/hi";

export default function LoginToggle() {
  const [visible, setVisible] = useState(false);
  const Eye = () => {
    setVisible(!visible);
  };

  const Icon = visible ? (
    <HiOutlineShieldExclamation
      onClick={Eye}
      className="absolute top-3 right-2 h-5 w-5 fill-yellow-500"
    />
  ) : (
    <HiOutlineShieldCheck
      onClick={Eye}
      className="absolute top-3 right-2 h-5 w-5 fill-green-500"
    />
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
}
