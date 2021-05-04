import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import Bataclan from "../images/bataclan.jpg";

const useStyles = makeStyles((theme) => ({
  aboutmeContainer: {
    backgroundColor: "#ffffff",
    width: "100%",
  },
  aboutmeGrid: {
    padding: theme.spacing(2),
  },
  aboutmeGridItem: {
    padding: theme.spacing(2),
  },
  media: {
    borderRadius: "50%",
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundSize: "contain",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40vw",
      maxHeight: "40vw",
    },
  },
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" id="aboutme-section">
      <Grid
        container
        direction="row"
        alignItems="center"
        alignContents="center"
        justify="center"
        className={classes.aboutmeGrid}
      >
        <Grid item md={3} className={classes.aboutmeGridItem}>
          <img
            src={Bataclan}
            alt="Jan Erickson S. bataclan"
            className={classes.media}
          />
        </Grid>
        <Grid item md={9} className={classes.aboutmeGridItem}>
          <Typography variant="h6">
            I am currently a 3rd year student of Technological University of the
            Philippines - Manila, taking Bachelor of Science in Computer
            Science. Although I haven't found my strengths yet in the field of
            Information Technology in general, I tend to make myself as flexible
            as possible whilst looking for it. My love for games made me want to
            become a game developer, but there is one weakness of mine that I
            must first overcome, designing.
          </Typography>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        alignContents="center"
        justify="center"
        className={classes.aboutmeGrid}
      >
        <Grid item md={4} className={classes.aboutmeGridItem}>
          <Typography variant="h6" align="center">
            PASSIONATE
          </Typography>
          <Typography>
            A 2-year old computer prodigy. Since then, I have been enthusiastic
            about what we can possibly do with this technology. The feeling of
            being able to develop things always hits different.
          </Typography>
        </Grid>
        <Grid item md={4} className={classes.aboutmeGridItem}>
          <Typography variant="h6" align="center">
            PROBLEM-SOLVER
          </Typography>
          <Typography>
            Having to deal with everyday challenges plus the large amount of
            hours poured into video games have taught me to calmy,
            strategically, and practically, solve any problems may it be
            programming or academic.
          </Typography>
        </Grid>
        <Grid item md={4} className={classes.aboutmeGridItem}>
          <Typography variant="h6" align="center">
            PRAGMATIC
          </Typography>
          <Typography>
            I have high regards to working efficiently and by that, I exert
            grounded, realistic, and practical approaches when it comes to
            development.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
