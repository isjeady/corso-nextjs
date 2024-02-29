import React, { FC, PropsWithChildren } from "react";
import Menu from "../Menu";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div>
        <Menu />
      </div>
      {children}
    </div>
  );
};

export default Layout;
