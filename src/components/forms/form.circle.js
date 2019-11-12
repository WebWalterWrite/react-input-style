import React from 'react';
import { CircleInput, CircleDynamicInput, CircleStaticInput } from '../inputs/Input';
import { ContainerForm } from './form.styled';

const CircleForm = () => {

  return (
    <ContainerForm>
      <div>
        <h3>fullMoon Input</h3>
        <CircleInput input="lastname" />
      </div>

      <div>
        <h3>westwide input</h3>
        <CircleDynamicInput input="lastname" />
      </div>
      <div>
        <h3>noface input</h3>
        <CircleStaticInput input="lastname" />
      </div>
    </ContainerForm>
  )
};

export default CircleForm;