import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import TopicCards from "./components/TopicCards";
import TopicList from "./components/TopicList";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Switch>
          <Route path="/topics" exact component={TopicList} />
          <Route path="/topics/:id" exact component={TopicCards} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
