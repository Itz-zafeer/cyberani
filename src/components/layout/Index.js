import React from "react";
import { Header } from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({ children, arabic, blackHeader }) => {
  return (
    <div>
      <Header arabic={arabic} blackHeader={blackHeader} />
      <main>{children}</main>
      <Footer arabic={arabic} />
    </div>
  );
};

export default Layout;
