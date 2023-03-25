import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  background-color: var(--Very-light-grey);
  color: var(--Very-dark-blue);
  transition: background-color 0.4s;
}

:root {
  --Very-light-grey: hsl(0, 0%, 98%);
  --White: #fff;
  --Very-dark-blue: hsl(200, 15%, 8%);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto";
}

/* .container {
  width: auto;
  padding-bottom: 10px;
  margin: auto !important;
} */

h1 {
    color: white;
}

.header {
  width: 100%;
  height: 70px;
  line-height: 70px;
  padding-top: 0;
  background: hsl(0, 0%, 100%);
  z-index: 11;
}`;
