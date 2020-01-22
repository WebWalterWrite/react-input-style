import React from "react";
import { FrameInput, WestSiteFrameInput } from "../inputs/InputFrame";
import { ContainerForm } from "./form.styled";

const FrameForm = () => {
  return (
    <ContainerForm>
      <h1>frame input</h1>
      <div className="Frame-form">
        <div>
          <h3>fullmoon frame Input</h3>
          <FrameInput nocircle input="password" />
        </div>
        <div>
          <h3>westside frame input</h3>
          <WestSiteFrameInput nocircle input="lastname" />
        </div>
      </div>
    </ContainerForm>
  );
};

export default FrameForm;
