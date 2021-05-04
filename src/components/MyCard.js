import { makeStyles } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
  },
}));

const MyCard = ({ src, title, description, moreInfo, handleOpen }) => {
  const classes = useStyles();

  return (
    <Card elevation={4} className={classes.card}>
      <CardActionArea
        onClick={() => handleOpen(src, title, description, moreInfo)}
      >
        <CardMedia
          component="img"
          alt="Dream Setup"
          height="200"
          image={src}
          title="Dream Setup"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MyCard;
