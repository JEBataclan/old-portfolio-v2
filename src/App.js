import "./App.css";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Works from "./components/Works";
import Contact from "./components/Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Header />
      <AboutMe />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
