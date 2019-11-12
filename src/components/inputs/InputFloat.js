import React, { useState } from "react";
import useInput from "../../hooks/input.hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getIconByInputName from "../../utils/icons.function";
import { Input, Placeholder, FloatPlaceholder } from "./input.styled";

export const OleUpInput = ({ input }) => {
  const firstname = useInput("", "text", null, input);

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

export const FloatPlaceHolderInput = ({ input }) => {
  const inputType = useInput("", "text", null, input);

  const [active, setActive] = useState(false);

  const setBlur = e => {
    const value = e.target.value;
    return !value.length && setActive(false);
  };

  return (
    <FloatPlaceholder active={active}>
      <FontAwesomeIcon icon={getIconByInputName(input)} size="3x" />
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
