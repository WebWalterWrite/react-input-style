import React from 'react';
import { FullMoonInput, WestSideInput, NoFaceInput } from '../inputs/Input';
import { ContainerForm } from './form.styled';

const CircleForm = () => {

  return (
    <ContainerForm>
      <div>
        <h3>fullMoon Input</h3>
        <FullMoonInput input="lastname" />
      </div>

      <div>
        <h3>westwide input</h3>
        <WestSideInput input="lastname" />
      </div>
      <div>
        <h3>noface input</h3>
        <NoFaceInput input="lastname" />
      </div>
    </ContainerForm>
  )
};

export default CircleForm;