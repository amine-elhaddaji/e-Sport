import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left"></MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright{" "}
          <strong>EL-HADDAJI Mohamed Amine</strong>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
