import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing:border-box;

  -webkit-transition: background-color 500ms linear;
  -ms-transition: background-color 500ms linear;
  transition: background-color 500ms linear;

}


body{
  background-color:${(props) => props.theme.background};
}

#gatsby-focus-wrapper{
  display:flex;
}

::selection {
  color: #fff;
  background: #ede6e0;
}


`;

export default GlobalStyle;
