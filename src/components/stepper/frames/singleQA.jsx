import React, { useContext } from "react";
import { StepperContext } from "../../../contexts/StepperContext";
import InputFactory from "../factories/inputFactory";
import Button from "../../button";
import Help from "../help";
import styled from "styled-components";
import { Title, SubTitle, Label } from "./elements";

const StyledQA = styled.form`
  position: relative;
  height: 100%;
  .QA-details {
    margin-bottom: 5vh;
    margin-left: 2rem;
  }
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
  const { temporaryVals, saveInput, addData } = useContext(StepperContext);
  const relevantValue = temporaryVals[tag];
  const handleTyping = (e) => {
    saveInput(tag, e.target.value);
  };
  const submitData = () => {
    addData(relevantValue);
  };

  return (
    <StyledQA onSubmit={submitData}>
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      <Label htmlFor={tag} className="QA-label">
        {question}
      </Label>
      {details && (
        <p details={details} htmlFor={question} className="QA-details" />
      )}

      <InputFactory
        input={{
          ...input,
          fn: handleTyping,
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
        fn={submitData}
      />
    </StyledQA>
  );
};

export default SingleQA;
