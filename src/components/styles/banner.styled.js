import styled, { keyframes } from "styled-components";

const rotate = keyframes`
0% {
  transform: translate3d(0%, 0, 0);
}

100% {
  transform: translate3d(-100%, 0, 0);
}
`;

export const reverseRotate = keyframes`
0% {
  transform: translate3d(-100%, 0, 0);
}

100% {
  transform: translate3d(0%, 0, 0);
}
`;

export const LetterContainer = styled.span`
  width: auto;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10vw;

  p {
    font-size: min(28vmin, 28vmin);
    font-weight: bold;
    color: ${(props) => props.theme.color} !important;

    -webkit-transition: color 500ms linear !important;
    -ms-transition: color 500ms linear !important;
    transition: color 500ms linear !important;
  }
`;

export const BrandSpan = styled(LetterContainer)`
  animation: ${reverseRotate} 10s linear infinite;
`;

export const LettersSpan = styled(LetterContainer)`
  animation: ${rotate} 10s linear infinite;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  display: flex;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const BannerMain = styled.section`
  height: 100vh;
  width: 100%;
  margin-bottom: 296px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.change};
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const TextAnimation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ScrollDown = styled.h1`
  position: absolute;
  bottom: -10px;
  left: -5px;
  font-size: 28vmin;
  line-height: 0.67;
  pointer-events: none;
  z-index: 999;
  color: ${(props) => props.theme.color};
  font-family: sans-serif;
`;
