import React from 'react';
import { FullMoonInput, WestSideInput, NoFaceInput } from '../inputs/Input';
import { ContainerForm } from './form.styled';

const SquareForm = () => {

  return (
    <ContainerForm>
      <h1>square input</h1>
      <div className="Square-form">
        <div>
          <h3>fullMoon square Input</h3>
          <FullMoonInput nocircle input="lastname" color="#009ACE" />
        </div>

        <div>
          <h3>westside square input</h3>
          <WestSideInput nocircle input="phone" color="#2dde98" />
        </div>
        <div>
          <h3>noface square input</h3>
          <NoFaceInput nocircle input="lastname" color="#009ACE" />
        </div>
      </div>
    </ContainerForm>
  );
};

export default SquareForm;