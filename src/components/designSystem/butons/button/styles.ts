import { styled } from "@stitches/react";

const ButtonBase = styled("button", {
  cursor: "pointer",
  transition: "filter easy 0.2s",

  "&:hover": {
    filter: "brightness(0.95)",
  },

  "&:disabled": {
    color: "$textPassive",
    cursor: "not-allowed",
    filter: "brightness(0.95)",
  },
});

export const Container = styled(ButtonBase, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "auto",
  minWidth: "100px",
  height: "2.8rem",
  padding: "0 1rem",
  border: "none",
  borderRadius: "0.6rem",

  fontSize: "1rem",
  fontWeight: 600,
  color: "$background",

  variants: {
    variant: {
      primary: {
        background: "$red",
      },
      secondary: {
        background: "$backgroundSecondary",
        color: "$textDefault",
      },
      success: {
        background: "$puple",
      },
      danger: {
        background: "$green",
      },
      warning: {
        background: "$yellow",
      },
    },
  },
});
