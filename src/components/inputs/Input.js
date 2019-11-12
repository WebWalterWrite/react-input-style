import React, { useState } from 'react';
import useInput from '../../hooks/input.hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getIconByInputName from '../../utils/icons.function';
import { Circle, CircleDynamic, CircleStatic } from './input.styled';


export const FullMoonInput = ({nocircle, input}) => {

  const firstname = useInput('', 'text', input, input);

  const [active, setActive] = useState(false);

  const setBlur = e => {
    const value = e.target.value;
    return !value.length && setActive(false)
  }

  return (
    <Circle nocircle={nocircle} active={active}>
      <FontAwesomeIcon icon={getIconByInputName(input)} size="3x" />
      <input
        {...firstname}
        onFocus={() => setActive(true)}
        onBlur={setBlur}
      />
    </Circle>
  )
};


export const WestSideInput = ({nocircle, input}) => {

  const firstname = useInput('', input, input, input);

  const [active, setActive] = useState(false);

  const setBlur = e => {
    const value = e.target.value;
    return !value.length && setActive(false)
  }

  return (
    <CircleDynamic nocircle={nocircle} active={active}>
      <FontAwesomeIcon icon={getIconByInputName(input)} size="3x" />
      <input
        {...firstname}
        onFocus={() => setActive(true)}
        onBlur={setBlur}
      />
    </CircleDynamic>
  )
};


export const NoFaceInput = ({nocircle, input}) => {

  const firstname = useInput('', 'text', 'firstname', 'firstname');

  const [active, setActive] = useState(false);

  const setBlur = e => {
    const value = e.target.value;
    return !value.length && setActive(false)
  }
  return (
    <CircleStatic nocircle={nocircle} active={active}>
      <FontAwesomeIcon icon={active ? getIconByInputName(input, 'full') : getIconByInputName(input, 'light')} size="3x" />
      <input
        {...firstname}
        onFocus={() => setActive(true)}
        onBlur={setBlur}
      />
    </CircleStatic>
  )
};