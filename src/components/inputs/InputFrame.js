import React, { useState } from "react";
import useInput from "../../hooks/input.hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getIconByInputName from "../../utils/icons.function";
import { FrameDynamic, WestSideFrame } from "./input.styled";


export const FrameInput = ({ nocircle, input, ...args }) => {
  const firstname = useInput("", input, {noplaceholder: true});
  const [active, setActive] = useState(false);

  const setBlur = e => {
    const value = e.target.value;
    return !value.length && setActive(false);
  };

  return (
    <FrameDynamic active={active}>
     <div className="Frame-placeholder">
      <FontAwesomeIcon icon={getIconByInputName(input)} size="3x" />
      <span>{input}</span>
     </div>
      <input {...firstname} onFocus={() => setActive(true)} onBlur={setBlur} />
    </FrameDynamic>
  );
};

export const WestSiteFrameInput = ({ input }) => {

   const field = useInput("", input, { noplaceholder: true });
   const [active, setActive] = useState(false);

   const setBlur = e => {
     const value = e.target.value;
     return !value.length && setActive(false);
   };

 return(
  <WestSideFrame active={active}>
   <FontAwesomeIcon icon={getIconByInputName(input)} size="3x" />
   <span>{input}</span>
   <input {...field} onFocus={() => setActive(true)} onBlur={setBlur}/>
  </WestSideFrame>
 )
};