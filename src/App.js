import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Leagues from "./component/Leagues";
import Teams from "./component/Teams";
import League from "./component/League";
import Team from "./component/Team";

import _nav from "./component/layout/header";
import _footer from "./component/layout/footer";
import Layout from "./component/layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Leagues} />
          <Route path="/teams" exact component={Teams} />
          <Route path="/leagues/:id" exact component={League} />
          <Route path="/teams/:id" exact component={Team} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Layout(App);
