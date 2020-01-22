import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyled = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-size: 16px;
  background: #20222A;
}
header{
  height: 15vh;
  padding: .5em;
  .Header-repo{
    text-align: right;
    a{
      color: white;
      :hover{
        color: #FFF36D;
      }
    }
  }
  .Header-title{
    display: flex;
    align-items:center;
    img{
      width: 10vmin;
    }
    h1{
      font-size: 2.5em;
      color:#FEFEFEFE;
    }
  }
}
main{
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2em;
}

`;
ReactDOM.render(
  <>
    <GlobalStyled />
    <App />
  </>,
  document.getElementById("root")
);
