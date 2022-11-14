import { styled } from "@stitches/react";
import { ButtonBase } from "../buttonBase";

export const Container = styled(ButtonBase, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "auto",
  minWidth: "100px",
  height: "2.8rem",
  padding: "0 1rem",
  background: "transparent",
  borderRadius: "0.8rem",

  fontSize: "1rem",
  fontWeight: 600,

  "&:disabled": {
    border: "2px solid $textPassive",
  },

  variants: {
    variant: {
      primary: {
        color: "$red",
        border: "2px solid $red",
      },
      secondary: {
        color: "$textPassive",
        border: "2px solid $backgroundSecondary",
      },
      success: {
        color: "$puple",
        border: "2px solid $puple",
      },
      danger: {
        color: "$green",
        border: "2px solid $green",
      },
      warning: {
        color: "$yellow",
        border: "2px solid $yellow",
      },
    },
  },
});
