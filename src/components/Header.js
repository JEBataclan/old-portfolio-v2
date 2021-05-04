import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Jebb from "../images/jebb.PNG";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    backgroundColor: "#F2F2F2",
    padding: theme.spacing(2, 0),
  },
  headerGrid: {
    padding: theme.spacing(2, 4),

    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  media: {
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundSize: "contain",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "25vw",
      maxHeight: "25vw",
    },
  },
  lightColor: {
    color: "#181818",
  },
  darkColor: {
    color: "#8C8C8C",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Paper className={classes.headerContainer} elevation={4}>
      <Container maxWidth="xl" id="home-section">
        <Grid
          container
          direction="row-reverse"
          alignItems="center"
          alignContents="center"
          justify="center"
          className={classes.headerGrid}
        >
          <Grid item md={5} sm={5} xs={12}>
            <img src={Jebb} alt="Jebb" className={classes.media} />
          </Grid>
          <Grid item md={7} sm={7} xs={12}>
            <Typography variant="h3" className={classes.lightColor}>
              Hi, I'm{" "}
              <Box component="span" fontWeight="fontWeightBold">
                Jan Erickson S. Bataclan
              </Box>
              !
            </Typography>
            <Typography variant="h5" className={classes.darkColor}>
              A{" "}
              <Box component="span" fontWeight="fontWeightBold">
                programmer
              </Box>{" "}
              that knows a little bit of{" "}
              <Box component="span" fontWeight="fontWeightBold">
                3D rendering
              </Box>
              .
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
