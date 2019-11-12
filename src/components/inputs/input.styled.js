import styled, {css} from 'styled-components/macro';


const common = css`
  display: flex;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 1em;
  height: auto;
  input{
    background: transparent;
    border: none;
    width: 100%;
    outline: none;
    font-size: 1.5em;
    color: #FEFEFEFE;
    margin-left: 5px;
    padding: .2em;
  }
`;

export const CircleStatic = styled.div`
${common}
border: solid 2px #A9EE8A;
border-radius:${props => props.nocircle ? 0 : '25px'};
  svg{
    color:#A9EE8A;
    width: 100%;
    border-radius: ${props => props.nocircle ? 0 : '50%'};
    padding: .2em;
    transition: all 200ms ease-in-out;
  }
`;

export const Circle = styled.div`
${common}
border: solid 2px #C0AEE7;
border-radius:${props => props.nocircle ? 0 : '25px'};
  svg{
    border-right: solid 2px #C0AEE7;
    border-top: solid 2px #C0AEE7;
    border-bottom: solid 2px #C0AEE7;
    color:#C0AEE7;
    ${props => props.active && {background:'#C0AEE7', color: '#FEFEFEFE' }}
    width: 100%;
    border-radius: ${props => props.nocircle ? 0 : '50%'};
    padding: .2em;
    transition: all 200ms ease-in-out;
  }
`;

export const CircleDynamic = styled.div`
${common}
border: solid 2px #FFF36D;
border-radius:${props => props.nocircle ? 0 : '25px'};
input{
  ${props => props.active && { 
      marginLeft: '-22px'
    }}
  }
svg{
  border-right: solid 2px #FFF36D;
  border-top: solid  #FFF36D ${props => props.nocircle ? '1px' : '2px'};
  border-bottom: solid  #FFF36D ${props => props.nocircle ? '1px' : '2px'};
  color:#FFF36D;
  ${props => props.active && { 
    transform: 'translateX(-45px)',
    border: 'none',
    padding: '.6em'
  }}
  width: 100%;
  border-radius: ${props => props.nocircle ? 0 : '50%'};
  padding: .2em;
  transition: all 200ms ease-in-out;
}
`;


/**
 * Component : input.placeholder
 */

 export const Input = styled.div`
 position: relative;
 display: flex;
 border: solid 2px #C0AEE7;
 width: 300px;
 padding: .2em;
 input{
   width: 100%;
   background: transparent;
   border: none;
   outline: none;
   padding:.2em;
   font-size:1.5em;
   color: #FEFEFEFE;
 }
 `;

 export const Placeholder = styled.div`
 position: absolute;
 top:${props => props.active ? '-42px' : 0};
 left: -5px;
 z-index:-1;
 display: flex;
 align-items: center;
 width: 100%;
 transition: all 200ms ease-in-out;
 span{
   font-size:1.5em;
   color:#8e8e8e;
   font-family: system-ui;
   -webkit-appearance: textfield;
   letter-spacing: normal;
  }
 svg{
  color:#C0AEE7;
  padding: .2em;
 }
 `