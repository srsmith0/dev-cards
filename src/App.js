import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import TopicCards from "./components/TopicCards";
import TopicList from "./components/TopicList";
import EditCardForm from "./components/EditCardForm"
import FocusShow from "./components/FocusShow"

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={TopicList} />
          <Route path="/topics/:id" exact component={TopicCards} />
          <Route path="/edit/:id" exact component={EditCardForm} />
          <Route path="/focus" exact component={FocusShow} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
