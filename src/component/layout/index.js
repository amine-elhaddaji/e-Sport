import React from "react";

import Header from "./header";
import Footer from "./footer";

const Layout = (Wrapped) => () =>
  (
    <>
      <Header />
      <Wrapped />
      <Footer />
    </>
  );

export default Layout;
