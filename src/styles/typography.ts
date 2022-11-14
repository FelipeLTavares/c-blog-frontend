import { styled } from "@stitches/react";
import { Theme } from "./theme";

//Headings
const H1 = styled("h1", {
  fontSize: 48,
});
const H2 = styled("h2", {
  fontSize: 36,
});
const H3 = styled("h3", {
  fontSize: 28,
});
const H4 = styled("h4", {
  fontSize: 18,
  fontWeight: "normal",
});
const H5 = styled("h5", {
  fontSize: 16,
  fontWeight: "normal",
});
const H6 = styled("h6", {
  fontSize: 14,
  fontWeight: "normal",
});

//Blockquote
const Blockquote = styled("blockquote", {
  fontSize: 24,
  color: Theme.colors.textQuote,
  fontStyle: "italic",
});

//Body
const Body = styled("p", {
  fontSize: 16,
});

//Titles
const Title1 = styled("h2", {
  fontSize: 36,
  fontStyle: "bolder",
});
const Title2 = styled("h3", {
  fontSize: 24,
  fontStyle: "bolder",
});
const Title3 = styled("h4", {
  fontSize: 18,
  fontStyle: "bolder",
});
