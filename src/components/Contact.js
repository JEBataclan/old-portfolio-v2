import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-scroll";
//import Link from "@material-ui/core/Link";

import youtubeLogo from "../images/youtube-logo.png";
import facebookLogo from "../images/facebook-logo.png";
import twitterLogo from "../images/twitter-logo.png";
import instagramLogo from "../images/instagram-logo.png";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    backgroundColor: "#181818",
  },
  contactGrid: {
    height: 100,
  },

  whiteColor: {
    color: "#ffffff",
  },
  grayColor: {
    color: "#8F8F8F",
  },
  breadCrumbItem: {
    cursor: "pointer",
    "&:hover": {
      color: "#6F6F6F",
    },
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Container
      maxWidth="xl"
      className={classes.contactContainer}
      id="contact-section"
    >
      <Container maxWidth="sm">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: 300 }}
        >
          <Grid
            container
            direction="row"
            align="center"
            className={classes.contactGrid}
          >
            <Grid item xs={12}>
              <Typography variant="h6" className={classes.whiteColor}>
                jebataclan03@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <a href="https://www.facebook.com/JEBataclan/">
                <Avatar alt="Facebook" src={facebookLogo} />
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="https://www.twitter.com/JEBataclan/">
                <Avatar alt="Twitter" src={twitterLogo} />
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="https://www.instagram.com/JEBataclan/">
                <Avatar alt="Instagram" src={instagramLogo} />
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="https://www.youtube.com/channel/UCr0Wy5RFDnMJbxjsiDCdgOg">
                <Avatar alt="Logo" src={youtubeLogo} />
              </a>
            </Grid>
          </Grid>
          <Breadcrumbs aria-label="breadcrumb" className={classes.grayColor}>
            <Link
              color="inherit"
              to="home-section"
              spy={true}
              smooth={true}
              duration={500}
              className={classes.breadCrumbItem}
            >
              Home
            </Link>
            <Link
              color="inherit"
              to="aboutme-section"
              spy={true}
              smooth={true}
              duration={500}
              className={classes.breadCrumbItem}
            >
              About Me
            </Link>
            <Link
              color="inherit"
              to="works-section"
              spy={true}
              smooth={true}
              duration={500}
              className={classes.breadCrumbItem}
            >
              Works
            </Link>
            <Link
              color="inherit"
              to="contact-section"
              spy={true}
              smooth={true}
              duration={500}
              className={classes.breadCrumbItem}
            >
              Contact
            </Link>
          </Breadcrumbs>
        </Grid>
      </Container>
    </Container>
  );
}
