import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Brightness4, Brightness7, ArrowUpward } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  iconTheme: {
    position: "fixed",
    bottom: theme.spacing(6),
    right: theme.spacing(6),
    height: "2.5rem",
    width: "2.5rem",
  },
  iconScroll: {
    position: "fixed",
    bottom: theme.spacing(12),
    right: theme.spacing(6),
    height: "2.5rem",
    width: "2.5rem",
    transition: "all 0.5s ease",
  },
  icon: {
    fontSize: "1.25rem",
  },
}));

export const ThemeToggle = ({ scrollPosition }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const classes = useStyles();

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {scrollPosition > 0 && (
        <Tooltip
          title={"Go to top"}
          placement="right"
          TransitionComponent={Zoom}
        >
          <IconButton
            color="inherit"
            onClick={handleScroll}
            aria-label={"Go to top"}
            className={classes.iconScroll}
          >
            <ArrowUpward className={classes.icon} />
          </IconButton>
        </Tooltip>
      )}
      <Tooltip
        title={"Toggle theme"}
        placement="right"
        TransitionComponent={Zoom}
      >
        <IconButton
          color="inherit"
          onClick={toggleTheme}
          aria-label={"Toggle theme"}
          className={classes.iconTheme}
        >
          {theme === "light" ? (
            <Brightness4 className={classes.icon} />
          ) : (
            <Brightness7 className={classes.icon} />
          )}
        </IconButton>
      </Tooltip>
    </>
  );
};
