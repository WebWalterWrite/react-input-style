import React from 'react';
import { CircleInput, CircleDynamicInput, CircleStaticInput } from '../inputs/Input';
import { ContainerForm } from './form.styled';

const SquareForm = () => {

  return (
    <ContainerForm>
      <div>
        <h3>fullMoon Input</h3>
        <CircleInput nocircle input="lastname" />
      </div>

      <div>
        <h3>westwide input</h3>
        <CircleDynamicInput nocircle input="lastname" />
      </div>
      <div>
        <h3>noface input</h3>
        <CircleStaticInput nocircle input="lastname" />
      </div>
    </ContainerForm>
  )
};

export default SquareForm;