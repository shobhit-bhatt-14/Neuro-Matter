import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import StoryList from "./StoryList";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import CreatePost from "./CreatePost";

import "../styles/Main.css";

const Main = () => {
  return (
    <div className="Main">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <LogIn />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/main" exact>
          <StoryList />
        </Route>
        <Route path="/create" exact>
          <CreatePost />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
