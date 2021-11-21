import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo-white.png";

const Header = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    item: {
      color: "white",
      fontWeight: 600,
      display: "inline-block",
      textDecoration: "none",
    },
    itemMobile: {
      color: "black",
      fontWeight: 600,
      display: "inline-block",
      textDecoration: "none",
    },
    mobileDevice: {
      [theme.breakpoints.down("md")]: {
        display: "none!important",
      },
    },
    menuButtonStyle: {
      fontWeight: "600!important",
      fontSize: "16px!important",
      textTransform: "none!important",
      fontStyle: "normal!important",
    },
    menuIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none!important",
      },
    },
    smStyle: {
      [theme.breakpoints.down("md")]: {
        textAlign: "center!important",
        marginLeft: "-61px!important",
      },
    },
  });

  const { menuButtonStyle, menuIcon, item, mobileDevice, smStyle, itemMobile } =
    useStyles();
  const [state, setState] = React.useState(false);

  const list = (
    <Box sx={{ width: 200 }} role="presentation">
      <List>
        <ListItem button>
          <ListItemText>
            <Link className={itemMobile} to="/reformer">
              The Reformer
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link className={itemMobile} to="/workouts">
              Workouts
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link className={itemMobile} to="/about">
              About
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Button
              sx={{
                bgcolor: "rgba(36, 90, 229, 1)",
                fontWeight: "600!important",
                fontSize: "16px!important",
                letterSpacing: ".1em!important",
              }}
              disableElevation
              variant="contained"
            >
              SHOP NOW
            </Button>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={menuIcon}
            onClick={() => setState(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            className={smStyle}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <img
              src={logo}
              alt=""
              style={{ marginTop: "6px", marginLeft: "18px" }}
            />
          </Typography>
          <Box className={mobileDevice} sx={{ marginRight: "48px" }}>
            <Link to="/reformer" className={item}>
              <Button
                className={menuButtonStyle}
                variant="text"
                color="inherit"
              >
                The Reformer
              </Button>
            </Link>
            <Link to="/workouts" className={item}>
              <Button
                className={menuButtonStyle}
                variant="text"
                color="inherit"
              >
                Workouts
              </Button>
            </Link>
            <Link to="/about" className={item}>
              <Button
                className={menuButtonStyle}
                variant="text"
                color="inherit"
              >
                About
              </Button>
            </Link>

            <Link to="/user" className={item}>
              <Button
                className={menuButtonStyle}
                variant="text"
                color="inherit"
              >
                <AccountCircleIcon />
              </Button>
            </Link>
            <Link to="/cart" className={item}>
              <Button
                className={menuButtonStyle}
                variant="text"
                color="inherit"
              >
                <ShoppingBagIcon></ShoppingBagIcon>
                <sup>2</sup>
              </Button>
            </Link>
          </Box>

          <Button
            className={mobileDevice}
            sx={{
              bgcolor: "rgba(36, 90, 229, 1)",
              height: "64px",
              width: "240px",
              margin: "0px -24px!important",
              borderRadius: "0!important",
              fontWeight: "600!important",
              fontSize: "16px!important",
              letterSpacing: ".1em!important",
            }}
            disableElevation
            variant="contained"
          >
            SHOP NOW
          </Button>
        </Toolbar>
      </AppBar>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </Box>
  );
};

export default Header;
