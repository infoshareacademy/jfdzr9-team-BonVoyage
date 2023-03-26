import { createGlobalStyle } from "styled-components";
import "typeface-roboto";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
  font-family: "Roboto", sans-serif;
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
  font-family: "Roboto", sans-serif;
}

/* .container {
  width: auto;
  padding-bottom: 10px;
  margin: auto !important;
} */

h1 {
    color: #4A6A2B;
    font-family: "Roboto";
}

.header {
  width: 100%;
  height: 70px;
  line-height: 70px;
  padding-top: 0;
  background: hsl(0, 0%, 100%);
  z-index: 11;
}`;
