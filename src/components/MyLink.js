import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
}));

const MyLink = ({ title, target, isDrawer }) => {
  const classes = useStyles();

  return (
    <Link
      className={isDrawer ? classes.drawerLink : classes.toolbarLink}
      to={target}
      smooth={true}
      offset={-45}
      duration={500}
    >
      {title}
    </Link>
  );
};

export default MyLink;
