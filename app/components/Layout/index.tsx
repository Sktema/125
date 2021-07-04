import * as React from "react";

import { LayoutWrapper } from "./style";
import { Header } from "../Header";

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  );
};

export { Layout };
