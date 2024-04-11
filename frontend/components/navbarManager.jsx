import React from "react";

import MobileSidebarManger from "./mobileSidebarManager";

const NavbarManager = () => {
  return (
    <div className="flex items-center p-4 md:p-0">
      <MobileSidebarManger />
    </div>
  );
};

export default NavbarManager;
