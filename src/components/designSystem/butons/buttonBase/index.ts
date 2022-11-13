import { styled } from "@stitches/react";

export const ButtonBase = styled("button", {
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
