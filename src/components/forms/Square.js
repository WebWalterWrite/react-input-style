import React from 'react';
import { FullMoonInput, WestSideInput, NoFaceInput } from '../inputs/Input';
import { ContainerForm } from './form.styled';

const SquareForm = () => {

  return (
    <ContainerForm>
      <div>
        <h3>fullMoon square Input</h3>
        <FullMoonInput nocircle input="lastname" />
      </div>

      <div>
        <h3>westside square input</h3>
        <WestSideInput nocircle input="lastname" />
      </div>
      <div>
        <h3>noface square input</h3>
        <NoFaceInput nocircle input="lastname" />
      </div>
    </ContainerForm>
  )
};

export default SquareForm;