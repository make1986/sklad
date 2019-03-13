import React from "react";

import Menu from "./Components/Menu";
import Logo from "./Components/Logo";
import User from "./Components/User";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Menu />
      <User />
    </div>
  );
}
