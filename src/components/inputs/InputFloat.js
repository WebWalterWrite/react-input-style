import React, { useState } from "react";
import useInput from "../../hooks/input.hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getIconByInputName from "../../utils/icons.function";
import { Input, Placeholder, FloatPlaceholder, WestSideFloat } from "./input.styled";

export const FullMoonFloatInput = ({ input }) => {
  const firstname = useInput("", input, {noplaceholder: true});

  const [active, setActive] = useState(false);

  const setBlur = e => {
    const value = e.target.value;
    return !value.length && setActive(false);
  };
  return (
    <Input active={active} color="#C0AEE7">
      <Placeholder active={active}>
        <FontAwesomeIcon icon={getIconByInputName(input)} size="3x" />
        <span>{input}</span>
      </Placeholder>
      <input {...firstname} onFocus={() => setActive(true)} onBlur={setBlur} />
    </Input>
  );
};


export const WestSideFloatInput = ({input, ...args}) => {

  const inputType = useInput('', input, {noplaceholder: true});

  const [active, setActive] = useState(false);

  const setBlur = e => {
    const value = e.target.value;
    return !value.length && setActive(false)
  }

  return (
    <WestSideFloat active={active} {...args}>
      <FontAwesomeIcon icon={getIconByInputName(input)} size="3x" />
      <div className="westside-box-placeholder">
        <span>{input}</span>
        <input
          {...inputType}
          onFocus={() => setActive(true)}
          onBlur={setBlur}
        />
      </div>
    </WestSideFloat>
  )
};




export const NoFaceFloatInput = ({ input }) => {
  const inputType = useInput("", input, { noplaceholder: true });

  const [active, setActive] = useState(false);

  const setBlur = e => {
    const value = e.target.value;
    return !value.length && setActive(false);
  };

  return (
    <FloatPlaceholder active={active}>
      <FontAwesomeIcon icon={active ? getIconByInputName(input, 'full') : getIconByInputName(input, 'light')} size="3x" />

      <div className="box-placeholder">
        <span>{input}</span>
        <input
          {...inputType}
          onFocus={() => setActive(true)}
          onBlur={setBlur}
        />
      </div>
    </FloatPlaceholder>
  );
};
