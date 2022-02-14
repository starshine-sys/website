import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Start from "./Start";
import rain from "./rain.jpg";
import data from "./data.json";
import About from "./About";
import Fronters from "./Fronters";
import Links from "./Links";
import Member from "./Member";

function App() {
  return (
    <Router>
      <div
        className="w-screen min-h-screen h-full px-4 md:px-0 py-8 md:py-20"
        style={{ backgroundImage: `url(${rain})` }}
      >
        <div className="container mx-auto my-auto md max-w-md md:max-w-3xl bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-lg">
          <div className="">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/fronters">
                <Fronters />
              </Route>
              <Route path="/links">
                <Links />
              </Route>
              {data.members.map((m, i) => (
                <Route key={i} path={"/" + m.name.toLowerCase()}>
                  <Member id={m.id} name={m.name} />
                </Route>
              ))}
              <Route path="/">
                <Start />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
