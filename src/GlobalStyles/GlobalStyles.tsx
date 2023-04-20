import { createGlobalStyle } from "styled-components";

interface ButtonProps {
  white?: boolean;
}

export const GlobalStyles = createGlobalStyle<ButtonProps>`



:root {
  --color-primary-ruby-dark: #872425;
 --color-primary-ruby: #F47B7A;
 --color-primary-ruby-light: #FFCFCF;
 --color-primary-emerald-dark: #003734;
 --color-primary-emerald: #02716A;
 --color-primary-emerald-new: #012e34;
 --color-primary-emerald-light: #A5E3E0;
 --color-secondary-amethyst-dark: #49159C;
 --color-secondary-amethyst: #8350EE;
 --color-secondary-amethyst-light: #E6D7FE;
 --color-secondary-topaz-dark: #C16316;
 --color-secondary-topaz: #F39239;
 --color-secondary-topaz-light: #FCE5CA;

 --color-neutral-black: 000000;
 --color-neutral-white: #fffffe;
 --color-neutral-white-opacity: rgba(255, 255, 255, 0.9);
 --font-size-h1: 7.2rem;
  --line-height-h1: 10.8rem;
  --font-size-h2: 3.6rem;
  --line-height-h2: 5.4rem;
  --font-size-h3: 2rem;
  --line-height-h3: 2.4rem;
  --font-size-h4: 1.6rem;
  --line-height-h4: 2.6rem;
  --font-size-body: 1.6rem;
  --line-height-body: 2.6rem;
  --border-radius-xxs: 0.3rem;
  --border-radius-xs: 0.5rem;
  --border-radius-s: 0.6rem;
  --border-radius-m: 1.2rem;
  --border-radius-l: 1.5rem;
  --border-radius-xl: 10rem;
  --padding-layout: 0 10%;
  --padding-search-bar-items: 0.6rem 3.2rem;
  --gap-xs: 0.5rem;
  --gap-s: 1rem;
  --gap-m: 1.5rem;
  --gap-l: 5rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: var(--font-size-body);
  font-weight: 400;
  line-height: var(--line-height-body);
  color: var(--color-neutral-black);
  background-color: var(--color-pneutral-white);
}

:root {
  min-height: 100vh;
  background-color: var(--color-neutral-white);
  overflow: auto;
  transition: 0.2s linear;
}

.header {
  width: 100%;
  padding-top: 0;
  z-index: 11;
}


/* .container {
  width: auto;
  padding-bottom: 10px;
  margin: auto !important;
} */


h1,
h2,
h3 {
  color: var(--color-neutral-black);
  transition: 0.2s linear;
}

h1 {
  font-size: var(--font-size-h1);
  line-height: var(--line-height-h1);
}

h2 {
  font-size: var(--font-size-h2);
  line-height: var(--line-height-h2);
}

h3 {
  font-size: var(--font-size-h3);
  line-height: var(--line-height-h3);
}

h4 {
  font-size: var(--font-size-h4);
  line-height: var(--line-height-h4);
  color: var(--color-primary-emerald-dark);
}

button{
  border: none;
  outline: none;
  font-family: inherit;
  background-color: transparent;
}

button {
  cursor: pointer;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--color-neutral-black);
}








`;
