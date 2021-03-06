import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props: any) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
