import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "~/lib/ui/navigation-menu";
import { Toggle } from "~/lib/ui/toggle";

const linkClasses = "hover:cursor-pointer hover:opacity-70";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center gap-9 whitespace-nowrap bg-background p-3">
      <div className="flex items-center gap-2 text-2xl">
        <h2>LOGO</h2>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavLink href="/" text="Home" />
          <NavLink href="/about" text="About" />
          <NavLink href="/contact" text="Contact" />
          <NavLink href="/shop" text="Shop" />
          <NavLink href="/settings" text="Settings" />
        </NavigationMenuList>
      </NavigationMenu>
      <ul className="ml-auto flex gap-3">
        <li className="flex items-center">Search</li>
        <li className="flex items-center gap-2">
          <Toggle>Color theme</Toggle>
        </li>
        <li className="flex items-center">Account</li>
        <li className="flex items-center">Locale</li>
        <li className="flex items-center">
          <button className={"rounded bg-purple-700 px-2 py-1 " + linkClasses}>
            &#128722; My Cart
          </button>
        </li>
      </ul>
    </header>
  );
};

type NavLinkProps = {
  href: string;
  text: string;
};

const NavLink = ({ href, text }: NavLinkProps) => {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {text}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
