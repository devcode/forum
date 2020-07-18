import React from "react";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";

import Home from "./pages/landing-page";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Profiles from "./pages/profile/profiles";
import Profile from "./pages/profile/profile";
import Post from "./pages/forum/post";
import Posts from "./pages/forum/posts";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <ColorModeProvider>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/posts/:id" component={Post} />
            <Route path="/forum" component={Posts} />
            <Route path="/developers" component={Profiles} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Home} />
          </Switch>
        </ColorModeProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
