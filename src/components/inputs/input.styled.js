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
  border: solid 2px ${props => props.color && props.color};
  border-radius: ${props => (props.nocircle ? 0 : "25px")};
  svg {
    color: ${props => props.color && props.color};
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
  border: solid 2px #2dde98;
  border-radius: ${props => (props.nocircle ? 0 : "25px")};
  input {
    ${props =>
      props.active && {
        marginLeft: "-22px"
      }}
  }
  svg {
    border-right: solid 2px #2dde98;
    border-top: solid #2dde98 ${props => (props.nocircle ? "0px" : "2px")};
    border-bottom: solid #2dde98 ${props => (props.nocircle ? "0px" : "2px")};
    color: #2dde98;
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
  .fa-3x {
    ${props => props.active && { fontSize: "2em" }}
    ${props =>
      props.active && { backgroundColor: "#C0AEE7", color: "#FEFEFEFE" }};
    transition: all 200ms ease-in-out;
  }
`;

export const Placeholder = styled.div`
  position: absolute;
  top: ${props => (props.active ? "-25px" : 0)};
  left: ${props => (props.active ? 0 : "-5px")};
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
    margin-left: ${props => props.active && "5px"};
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
  border-bottom: solid 2px #009ace;
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
    color: #009ace;
    padding: 0.2em;
  }
`;

export const WestSideFloat = styled.div`
  position: relative;
  display: flex;
  border: none;
  border-bottom: solid 2px ${props => props.color && props.color};
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
      color: ${props => (props.active ? props.color : "#8e8e8e")};
      font-family: system-ui;
      -webkit-appearance: textfield;
      background: transparent;
      letter-spacing: 2px;
      transition: all 200ms ease-in-out;
    }
  }
  svg {
    color: ${props => props.color && props.color};
    padding: 0.2em;
    ${props =>
      props.active && {
        transform: "translateX(-45px)",
        border: "none"
      }}
    transition: all 200ms ease-in-out;
  }
`;

/**
 #####################
 FrameInput
 #####################
 */
export const FrameDynamic = styled.div`
  ${common}
  position: relative;
  display: flex;
  border: solid 2px ${props => (props.active ? "#ffac25" : "#8e8e8e")};
  border-radius: 8px;
  height:52px;
  transition: all 200ms ease-in-out;
  .Frame-placeholder{
    position: absolute;
    z-index: ${props => (props.active ? 2 : -1)};
    top: ${props => (props.active ? "-25px" : "0px")};
    display: flex;
    align-items: center;
    left: ${props => (props.active ? "-32px" : "0px")};
    bottom: ${props => (props.active ? "25px" : "-5px")};
    transform: ${props => props.active && "scale(.5)"};
    transition: all 200ms ease-in-out;
    border: ${props => (props.active && "solid 2px #ffac25")};
    border-radius: 8px;
    background: ${props => (props.active && "#20222A")};
    color:  ${props => (props.active ? "#FFFFFF" : "#20222A")};
    padding: 0 .4em 0 .2em;
    span{
      font-size: 1.5em;
      color: ${props => (props.active ? "#FFFFFF" : "#8e8e8e")};
      font-family: system-ui;
      -webkit-appearance: textfield;
      background: transparent;
      letter-spacing: 2px;
    }
    svg{
    padding: 0.2em;
    color: ${props => (props.active ? "#FFFFFF" : "#ffac25")};
    background:"#ffac25"
    }
  }
 `;


/**
 #####################
 WestSideFrameInput
 #####################
 */
export const WestSideFrame = styled.div`
  ${common}
  position: relative;
  display: flex;
  align-items: center;
  border: solid 2px ${props => (props.active ? "#ffac25" : "#8e8e8e")};
  height:52px;
  transition: all 200ms ease-in-out;
  span{
    position: absolute;
    top: ${props => props.active && "-12px"};
    left: ${props => props.active ? "20px" : "50px"};
    z-index: ${props => (props.active ? 2 : -1)};
    font-size: ${props => props.active ? "1em" : "1.5em"};
    color: ${props => (props.active ? "#ffac25" : "#8e8e8e")};
    font-family: system-ui;
    -webkit-appearance: textfield;
    background: #20222A;
    padding: ${props => props.active ? "0 .2em 0 .3em" : "none"};
    letter-spacing: 2px;
    transition: all 200ms ease-in-out;
  }
  svg{
    position: absolute;
    padding: .2em;
    ${props => props.active && {
      background: "#ffac25",
      fontSize: "2em",
      transform: "translateX(-16px)",

    }}
    color: ${props => props.active ? "#ffffff" : "#ffac25"};
    transition: all 200ms ease-in-out;
  }
  input{
    margin-left: ${props => props.active && "20px"};
  }
`;