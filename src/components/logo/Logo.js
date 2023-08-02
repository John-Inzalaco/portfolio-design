import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    stroke: theme.palette.foreground.default,
    "&:hover": {
      fill: theme.palette.primary.main,
      stroke: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-35 -10 220 220"
      className={classes.svgHover}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_5" data-name="Layer 5">
          <rect
            className="cls-1"
            x="60"
            y="37.5"
            width="15"
            height="98"
            rx="3.75"
          />
          <path
            className="cls-1"
            d="M25, 132.5 C25, 157.5, 67.5, 157.5, 67.5, 132.5"
            strokeWidth="16"
            fill="transparent"
          />
          <rect
            className="cls-1"
            x="100"
            y="37.5"
            width="15"
            height="120"
            rx="3.75"
          />
        </g>
      </g>
    </svg>
  );
};
