import React, { Component } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

import Header from "./header";

const Layout = (Wrapped) => () =>
  (
    <>
      <Header />
      <Wrapped />
    </>
  );

export default Layout;
