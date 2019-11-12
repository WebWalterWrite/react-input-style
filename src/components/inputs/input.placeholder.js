import React, { useState } from 'react';
import useInput from '../../hooks/input.hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getIconByInputName from '../../utils/icons.function';
import { Input, Placeholder } from './input.styled';

export const InputPlaceholder = ({input}) => {

  const firstname = useInput('', 'text', null, 'firstname');

  const [active, setActive] = useState(false);

  const setBlur = e => {
    const value = e.target.value;
    return !value.length && setActive(false)
  }
  return (
    <Input active={active}>
      <Placeholder active={active}>
      <FontAwesomeIcon icon={active ? getIconByInputName(input, 'full') : getIconByInputName(input)} size="3x" />
      <span>{input}</span>
      </Placeholder>
      <input
        {...firstname}
        onFocus={() => setActive(true)}
        onBlur={setBlur}
      />
    </Input>
  )
};