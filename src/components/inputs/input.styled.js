import styled, { css } from "styled-components/macro";

const common = css`
  display: flex;
  width: 250px;
  margin: 0 auto;
  margin-bottom: 1em;
  height: auto;
  input {
    background: transparent;
    border: none;
    width: 100%;
    outline: none;
    font-size: 1.5em;
    color: #fefefefe;
    margin-left: 5px;
    padding: 0.2em;

  }
`;

/**
 #####################
 NoFaceInput
 #####################
 */
export const CircleStatic = styled.div`
  ${common}
  border: solid 2px #009ACE;
  border-radius: ${props => (props.nocircle ? 0 : "25px")};
  svg {
    color: #009ACE;
    width: 100%;
    border-radius: ${props => (props.nocircle ? 0 : "50%")};
    padding: 0.2em;
    transition: all 200ms ease-in-out;
  }
`;

/**
 #####################
 FullMoonInput
 #####################
 */
export const Circle = styled.div`
  ${common}
  border: solid 2px #C0AEE7;
  border-radius: ${props => (props.nocircle ? 0 : "25px")};
  svg {
    border-right: solid 2px #c0aee7;
    border-top: solid 2px #c0aee7;
    border-bottom: solid 2px #c0aee7;
    color: #c0aee7;
    ${props => props.active && { background: "#C0AEE7", color: "#FEFEFEFE" }}
    width: 100%;
    border-radius: ${props => (props.nocircle ? 0 : "50%")};
    padding: 0.2em;
    transition: all 200ms ease-in-out;
  }
`;

/**
 #####################
 WestSideInput
 #####################
 */
export const CircleDynamic = styled.div`
  ${common}
  border: solid 2px #FFF36D;
  border-radius: ${props => (props.nocircle ? 0 : "25px")};
  input {
    ${props =>
    props.active && {
      marginLeft: "-22px"
    }}
  }
  svg {
    border-right: solid 2px #fff36d;
    border-top: solid #fff36d ${props => (props.nocircle ? "0px" : "2px")};
    border-bottom: solid #fff36d ${props => (props.nocircle ? "0px" : "2px")};
    color: #fff36d;
    ${props =>
    props.active && {
      transform: "translateX(-45px)",
      border: "none",
      padding: ".6em"
    }}
    width: 100%;
    border-radius: ${props => (props.nocircle ? 0 : "50%")};
    padding: 0.2em;
    transition: all 200ms ease-in-out;
  }
`;

/**
 #####################
 OleUpInput
 #####################
 */
export const Input = styled.div`
  position: relative;
  display: flex;
  border: none;
  border-bottom: solid 2px ${props => props.color};
  width: 250px;
  padding: 0.1em;
  input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding: 0.2em;
    font-size: 1.5em;
    color: #fefefefe;
  }
  .fa-3x{
    ${props => props.active && { fontSize: '2em' }}
    ${props => props.active && { backgroundColor: "#C0AEE7", color: "#FEFEFEFE" }};
    transition: all 200ms ease-in-out;
  }
`;

export const Placeholder = styled.div`
  position: absolute;
  top: ${props => (props.active ? "-25px" : 0)};
  left: ${props => (props.active ? 0 : '-5px')};
  z-index: -1;
  display: flex;
  align-items: center;
  width: 100%;
  transition: all 200ms ease-in-out;
  span {
    font-size: 1.5em;
    color: ${props => (props.active ? "#c0aee7" : "#8e8e8e")};
    font-family: system-ui;
    -webkit-appearance: textfield;
    background: transparent;
    letter-spacing: 2px;
    margin-left: ${props => (props.active && '5px')};
  }
  svg {
    color: #c0aee7;
    padding: 0.2em;
  }
`;


/**
 #####################
 FloatPlaceHolderInput
 #####################
 */
export const FloatPlaceholder = styled.div`
  position: relative;
  display: flex;
  border: none;
  border-bottom: solid 2px #009ACE;
  width: 250px;
  .box-placeholder {
    display: flex;
    align-items: center;
    input {
      width: 100%;
      background: transparent;
      border: none;
      outline: none;
      padding: 0.1em;
      font-size: 1.5em;
      color: #fefefefe;
      text-transform: lowercase;
    }
    span {
      position: absolute;
      z-index: -1;
      bottom: ${props => props.active && "25px"};
      left: ${props => (props.active ? "15px" : "45px")};
      font-size: 1.5em;
      transform: ${props => props.active && "scale(.6)"};
      color: ${props => (props.active ? "#009ACE" : "#8e8e8e")};
      font-family: system-ui;
      -webkit-appearance: textfield;
      background: transparent;
      letter-spacing: 2px;
      transition: all 200ms ease-in-out;
    }
  }
  svg {
    color: #009ACE;
    padding: 0.2em;
  }
`;


export const WestSideFloat = styled.div`
  position: relative;
  display: flex;
  border: none;
  border-bottom: solid 2px #fff36d;
  width: 250px;
  .westside-box-placeholder {
    display: flex;
    align-items: center;
    input {
      width: 100%;
      background: transparent;
      border: none;
      outline: none;
      padding: 0.1em;
      font-size: 1.5em;
      color: #fefefefe;
      text-transform: lowercase;
      margin-left: -40px;
    }
    span {
      position: absolute;
      z-index: -1;
      bottom: ${props => props.active && "25px"};
      left: ${props => (props.active ? "-20px" : "45px")};
      font-size: 1.5em;
      transform: ${props => props.active && "scale(.6)"};
      color: ${props => (props.active ? "#fff36d" : "#8e8e8e")};
      font-family: system-ui;
      -webkit-appearance: textfield;
      background: transparent;
      letter-spacing: 2px;
      transition: all 200ms ease-in-out;
    }
  }
  svg {
    color: #fff36d;
    padding: 0.2em;
    ${props =>
    props.active && {
      transform: "translateX(-45px)",
      border: "none",

    }}
    transition: all 200ms ease-in-out;
  }
`;
