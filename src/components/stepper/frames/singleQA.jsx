import React, { useContext } from "react";
import { StepperContext } from "../../../contexts/StepperContext";
import InputFactory from "../factories/inputFactory";
import Button from "../../button";
import Help from "../help";
import styled from "styled-components";
import { Title, SubTitle, Label, Details } from "./elements";

const StyledQA = styled.form`
  position: relative;
  height: 100%;
  .QA-input {
    margin-left: 2rem;
  }
  .submit-button {
    position: absolute;
    bottom: 4rem;
    right: 0;
  }
  .QA-help {
    position: absolute;
    bottom: 4rem;
    left: 0;
  }
`;

const SingleQA = ({ subTitle, question, details, input, tag, title, help }) => {
  const { temporaryVals, saveInput, addData, next } = useContext(
    StepperContext
  );
  const relevantValue = temporaryVals[tag];
  const handleTyping = (e) => {
    saveInput(tag, e.target.value);
  };
  const completeStep = (e) => {
    e.preventDefault();
    addData(tag, temporaryVals[tag]);
    next();
  };

  return (
    <StyledQA onSubmit={completeStep}>
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      <Label htmlFor={tag} className="QA-label">
        {question}
      </Label>
      {details && <Details details={details}>{details}</Details>}

      <InputFactory
        input={{
          ...input,
          fn: handleTyping,
          id: tag,
          tag: tag,
          className: "QA-input",
          placeholder: "Type here",
          value: relevantValue,
        }}
      />
      <Help helpText={help} className="QA-help" />
      <Button
        content="Submit"
        height="3rem"
        width="10rem"
        className="submit-button primary"
        fn={completeStep}
        disabled={relevantValue === ""}
      />
    </StyledQA>
  );
};

export default SingleQA;
