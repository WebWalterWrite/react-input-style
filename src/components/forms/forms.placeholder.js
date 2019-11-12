import React from 'react';
import { InputPlaceholder } from '../inputs/input.placeholder';
import { ContainerForm } from './form.styled';

const PlaceholderForm =  () => {

  return(
    <ContainerForm>
      <InputPlaceholder input="firstname" />
    </ContainerForm>
  )
};

export default PlaceholderForm;