import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import "./App.css";
import GithubUsers from "./components/githubUsers";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main role="main" className="container mx-auto mt-5 pt-5">
        <Switch>
          <Route path="/users" component={GithubUsers}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect exact from="/" to="/users" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
