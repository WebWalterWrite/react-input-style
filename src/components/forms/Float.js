import React from "react";
import { FloatPlaceHolderInput, OleUpInput, WestSideFloatInput } from "../inputs/InputFloat";
import { ContainerForm } from "./form.styled";

const PlaceholderForm = () => {
  return (
    <ContainerForm>
      <div>
        <h3>fullmoon float input</h3>
        <OleUpInput input="firstname" />
      </div>

      <div>
        <h3>west side float input</h3>
        <WestSideFloatInput input="firstname"/>
      </div>
      <div>
        <h3>noface float input</h3>
        <FloatPlaceHolderInput input="firstname" />
      </div>
    </ContainerForm>
  );
};

export default PlaceholderForm;
