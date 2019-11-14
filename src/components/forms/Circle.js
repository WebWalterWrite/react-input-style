import React from 'react';
import { FullMoonInput, WestSideInput, NoFaceInput } from '../inputs/Input';
import { ContainerForm } from './form.styled';

const CircleForm = () => {

  return (
    <ContainerForm>
      <div>
        <h3>fullMoon circle Input</h3>
        <FullMoonInput input="email" />
      </div>

      <div>
        <h3>westside circle input</h3>
        <WestSideInput input="lastname" />
      </div>
      <div>
        <h3>noface cirlce input</h3>
        <NoFaceInput input="lastname" color="#009ACE" />
      </div>
    </ContainerForm>
  );
};

export default CircleForm;