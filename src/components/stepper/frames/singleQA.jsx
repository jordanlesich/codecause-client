import React, { useContext } from "react";
import { StepperContext } from "../../../contexts/StepperContext";
import InputFactory from "../factories/inputFactory";
import Button from "../../button";
import { getColor } from "../../../helpers";
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
`;

const SingleQA = ({ subTitle, question, details, input, tag, title }) => {
  // const [userInput, setUserInput] = useState("");
  const { temporaryVals, saveInput, addData } = useContext(StepperContext);
  const relevantValue = temporaryVals[tag];
  // const checkValidation = () => {
  //   //run e against a regex match function
  // };
  const handleTyping = (e) => {
    saveInput(tag, e.target.value);
    // setCanSubmit(checkValidation(e.target.value));
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
      <Button
        content="Submit"
        height="3rem"
        width="10rem"
        className="submit-button"
        border={`1px solid ${getColor("primaryMed")}`}
        bgColor={getColor("primaryLight")}
        color={getColor("primary")}
        fn={submitData}
      />
    </StyledQA>
  );
};

export default SingleQA;
