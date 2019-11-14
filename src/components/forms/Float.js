import React from "react";
import { NoFaceFloatInput, FullMoonFloatInput, WestSideFloatInput } from "../inputs/InputFloat";
import { ContainerForm } from "./form.styled";

const PlaceholderForm = () => {
  return (
    <ContainerForm>
      <div>
        <h3>fullmoon float input</h3>
        <FullMoonFloatInput input="firstname" />
      </div>

      <div>
        <h3>west side float input</h3>
        <WestSideFloatInput input="firstname" color="#FFF36D" />
      </div>
      <div>
        <h3>noface float input</h3>
        <NoFaceFloatInput input="firstname" />
      </div>
    </ContainerForm>
  );
};

export default PlaceholderForm;
