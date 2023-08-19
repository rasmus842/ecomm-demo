import React from "react";
import { Separator } from "~/lib/ui/separator";

export const Footer = () => {
  return (
    <footer className="flex justify-between gap-2 bg-secondary px-10 py-20 text-secondary-foreground">
      <div>&#169; LOGO and text below</div>
      <div>
        <h2>Main menu</h2>
        <Separator />
        <ul>
          <li>About page</li>
          <li>Settings</li>
          <li>My Account</li>
          <li>Shop</li>
        </ul>
      </div>
      <div>
        <h2>See also</h2>
        <Separator />
        <ul>
          <li>Other project X</li>
          <li>Other project Y</li>
          <li>Other project Z</li>
          <li>Other project W</li>
        </ul>
      </div>
      <ul>
        <li>
          <h2>Contact</h2>
        </li>
        <li>
          <a href="https://github.com/rasmus842/biceps">github.com/rasmus842</a>
        </li>
        <li>Send an email</li>
        <li>Other contact info</li>
      </ul>
    </footer>
  );
};
