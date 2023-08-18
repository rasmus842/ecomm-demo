import React from "react";
import Link from "next/link";
import { Switch } from "~/lib/ui/switch";

const linkClasses = "hover:cursor-pointer hover:opacity-70";

export const Header = () => {
  return (
    <header className="fixed top-0 flex w-full items-center gap-9 whitespace-nowrap bg-slate-900 p-2 text-gray-100">
      <div className="flex items-center gap-2 text-2xl">
        <p>
          <strong>Next-js TODO app</strong>
        </p>
      </div>
      <ul className="ml-auto flex gap-3">
        <Switch />
        <Link className={linkClasses} href="/">
          Home
        </Link>
        <Link className={linkClasses} href="/about">
          About
        </Link>
        <Link className={linkClasses} href="/contact">
          &#9993; Contact
        </Link>
        <Link className={linkClasses} href="/login">
          Login
        </Link>
        <Link className={linkClasses} href="/signup">
          Sign up
        </Link>
      </ul>
      <button className={"rounded bg-purple-700 px-2 py-1 " + linkClasses}>
        &#128722; My Cart
      </button>
    </header>
  );
};
