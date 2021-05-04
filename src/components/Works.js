import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import MyCard from "./MyCard";

// programming projects
import T4g from "../images/t4g.PNG";
import ggLoLSmartOverlay from "../images/gglol-smartoverlay.png";
import payrollSystem from "../images/payroll-system.png";

// 3d renders
import dreamSetup from "../images/dream-setup.png";
import sagingNaSaba from "../images/saging-na-saba.png";
import kingdomKey from "../images/kingdom-key.png";
import Bewilderment from "../images/bewilderment.png";
import Dice from "../images/dice.png";
import tokyoGhoulCoffee from "../images/tg-coffee.png";
import buttPlug from "../images/buttplug.jpg";
import elFili from "../images/elfili.jpg";
import Chimpanzees from "../images/chimpanzees.jpg";

const useStyles = makeStyles((theme) => ({
  worksPaper: {
    backgroundColor: "#F2F2F2",
  },
  worksGrid: {
    padding: theme.spacing(2),
  },
  divisionPadding: {
    padding: theme.spacing(6, 0),
  },
  textColor: {
    color: "#181818",
  },
}));

export default function Works() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [dialogInfo, setDialogInfo] = useState({
    src: "",
    title: "",
    desc: "",
    moreInfo: "",
  });

  const handleOpen = (src, title, description, moreInfo) => {
    setDialogInfo({
      src: src,
      title: title,
      description: description,
      moreInfo: moreInfo,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Paper className={classes.worksPaper} elevation={4}>
        <Container maxWidth="lg" id="works-section">
          <div className={classes.divisionPadding}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  align="center"
                  className={classes.lightColor}
                >
                  <Box component="span" fontWeight="fontWeightBold">
                    Programming Projects
                  </Box>
                </Typography>
              </Grid>
              <Grid item md={4} sm={6}>
                <MyCard
                  src={T4g}
                  title="Tag"
                  description="A 2D platformer 2-player game wherein you have to catch or run from the opposing player."
                  moreInfo="https://github.com/JEBataclan/t4g/"
                  handleOpen={handleOpen}
                />
              </Grid>
              <Grid item md={4} sm={6}>
                <MyCard
                  src={ggLoLSmartOverlay}
                  title="TUP GG:LoL Smart Overlay"
                  description="Smart Overlay Picks and Bans Selection for TUP GG:LoL."
                  moreInfo="https://www.facebook.com/2332868780294392/videos/853004788644386"
                  handleOpen={handleOpen}
                />
              </Grid>

              <Grid item md={4} sm={6}>
                <MyCard
                  src={payrollSystem}
                  title="TUP Payroll System (WIP)"
                  description="Our group's project for Software Engineering 2."
                  moreInfo="https://github.com/JEBataclan/payroll-system"
                  handleOpen={handleOpen}
                />
              </Grid>
            </Grid>
          </div>
          <Divider variant="middle" />
          <div className={classes.divisionPadding}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h4" align="center">
                  <Box
                    component="span"
                    fontWeight="fontWeightBold"
                    className={classes.lightColor}
                  >
                    Recent 3D Renders
                  </Box>
                </Typography>
              </Grid>
              <Grid item md={4} sm={6}>
                <MyCard
                  src={dreamSetup}
                  title="Dream Setup"
                  description="This is my room dream setup. Quite simple, right?"
                  handleOpen={handleOpen}
                />
              </Grid>
              <Grid item md={4} sm={6}>
                <MyCard
                  src={sagingNaSaba}
                  title="Saging Na Saba"
                  description="A viewer's request when I went live."
                  handleOpen={handleOpen}
                />
              </Grid>
              <Grid item md={4} sm={6}>
                <MyCard
                  src={kingdomKey}
                  title="Kingdom Key"
                  description="Sora's default Keyblade from Kingdom Hearts."
                  handleOpen={handleOpen}
                />
              </Grid>
              <Grid item md={4} sm={6}>
                <MyCard
                  src={Bewilderment}
                  title="Bewilderment"
                  description="Something new. Title came from a friend."
                  handleOpen={handleOpen}
                />
              </Grid>
              <Grid item md={4} sm={6}>
                <MyCard
                  src={Dice}
                  title="Dice"
                  description="Inspired by the popular manhua/webtoon, Dice."
                  handleOpen={handleOpen}
                />
              </Grid>
              <Grid item md={4} sm={6}>
                <MyCard
                  src={tokyoGhoulCoffee}
                  title="Ghoul's Coffee"
                  description="Yes, I'm a fan of Tokyo Ghoul."
                  handleOpen={handleOpen}
                />
              </Grid>
              <Grid item md={4} sm={6}>
                <MyCard
                  src={buttPlug}
                  title="Butt Plug"
                  description="You read that correctly."
                  handleOpen={handleOpen}
                />
              </Grid>
              <Grid item md={4} sm={6}>
                <MyCard
                  src={elFili}
                  title="Simoun's Glasses & Lamp"
                  description="Inspired by Jose Rizal's El Filibusterismo."
                  handleOpen={handleOpen}
                />
              </Grid>
              <Grid item md={4} sm={6}>
                <MyCard
                  src={Chimpanzees}
                  title="Chimpanzees"
                  description="Tested a modifier. Turned out cool."
                  handleOpen={handleOpen}
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </Paper>

      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <Card elevation={2}>
          <CardMedia
            component="img"
            alt="Dream Setup"
            image={dialogInfo.src}
            title="Dream Setup"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {dialogInfo.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {dialogInfo.description}
            </Typography>
            {dialogInfo.moreInfo === "" ? null : (
              <Typography variant="body2" color="textSecondary" component="p">
                <a href={dialogInfo.moreInfo}>{dialogInfo.moreInfo}</a>
              </Typography>
            )}
          </CardContent>
        </Card>
      </Dialog>
    </>
  );
}
