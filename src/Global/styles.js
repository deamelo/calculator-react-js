import { createGlobalStyle } from "styled-components";


const Global = createGlobalStyle `

@import url('https://fonts.googleapis.com/css?family=Lato');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    background-color: #282c34;
    text-decoration: none;
    list-style: none;
  }
`

export default Global