import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MyLink from "./MyLink";
//import { Link } from "react-scroll";
//import Link from "@material-ui/core/Link";

import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#EAEAEA",
    zIndex: theme.zIndex.drawer + 999,
    fontSize: "1rem",
  },
  drawer: {
    backgroundColor: "#EAEAEA",
    [theme.breakpoints.up("sm")]: {
      flexShrink: 0,
    },
  },
  drawerContainer: {
    overflow: "auto",
  },
  drawerPaper: {
    backgroundColor: "#EAEAEA",
    width: "100%",
    height: "auto",
    color: "#181818",
    fontSize: "1rem",
  },
  drawerLink: {
    padding: theme.spacing(1),
    color: "#181818",
  },
  toolbarLink: {
    padding: theme.spacing(0, 2),
    color: "#181818",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  appBarSpacer: theme.mixins.denseToolbar,
  menuButton: {
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  disableVerticalPadding: {
    padding: theme.spacing(0, 2),
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        elevation={mobileOpen ? 0 : 4}
        className={classes.appBar}
        position="fixed"
      >
        <Toolbar component="nav" variant="dense">
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Hidden xsDown implementation="css">
            <Button>
              <MyLink title={"Home"} target="home-section" isDrawer={false} />
            </Button>
            <Button>
              <MyLink
                title={"About Me"}
                target="aboutme-section"
                isDrawer={false}
              />
            </Button>
            <Button>
              <MyLink title={"Works"} target="works-section" isDrawer={false} />
            </Button>
            <Button>
              <MyLink
                title={"contact"}
                target="contact-section"
                isDrawer={false}
              />
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
      <div className={classes.appBarSpacer} />

      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          className={classes.drawerContainer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Toolbar />
          <div className="drawerContainer">
            <List disablePadding="true">
              <ListItem button>
                <MyLink title={"Home"} target="home-section" isDrawer={true} />
              </ListItem>
              <ListItem button>
                <MyLink
                  title={"About Me"}
                  target="aboutme-section"
                  isDrawer={true}
                />
              </ListItem>
              <ListItem button>
                <MyLink
                  title={"Works"}
                  target="works-section"
                  isDrawer={true}
                />
              </ListItem>
              <ListItem button>
                <MyLink
                  title={"Contact"}
                  target="contact-section"
                  isDrawer={true}
                />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </Hidden>
    </>
  );
}
