import React, { useContext } from "react";
import { Context } from "../Context";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

const _nav = () => {
  const { game, onSetGame } = useContext(Context);

  return (
    <div className="navi">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"> E-Sport Ubo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Leagues</Nav.Link>
              <Nav.Link href="/teams">Teams</Nav.Link>
              <select
                defaultValue={game}
                onChange={(_) => {
                  console.log("game :>> ", game);
                  onSetGame({ game: _.target.value });
                }}
                class="form-select"
                aria-label="Default select example"
              >
                <option selected key="allGames" value="allGames">
                  ALL
                </option>
                <option key="csgo" value="csgo">
                  CS-GO
                </option>
                <option key="codmw" value="codmw">
                  CALL OF DUTY
                </option>
                <option key="dota2" value="dota2">
                  DOTA 2
                </option>
                <option key="pubg" value="pubg">
                  PubG
                </option>
                <option key="ow" value="ow">
                  Overwatch
                </option>
              </select>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default _nav;
