import React from "react";
import { FloatPlaceHolderInput, OleUpInput } from "../inputs/InputFloat";
import { ContainerForm } from "./form.styled";

const PlaceholderForm = () => {
  return (
    <ContainerForm>
      <div>
        <h3>ole up input</h3>
        <OleUpInput input="firstname" />
      </div>

      <div>
        <h3>float placeholder input</h3>
        <FloatPlaceHolderInput input="firstname" />
      </div>
    </ContainerForm>
  );
};

export default PlaceholderForm;
