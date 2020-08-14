import React, { useContext } from "react";
import { StepperContext } from "../../../contexts/StepperContext";
import styled from "styled-components";
import { Title, SubTitle } from "./elements";
import { getColor } from "../../../helpers";
import Button from "../../button";
const MessageFrame = styled.div`
  position: relative;
  height: 100%;
  margin-left: 1.5rem;

  .list {
    list-style: square;
    margin-left: 1.5rem;

    li {
      margin: 0.5rem 0;
    }
  }
  .next-button {
    position: absolute;
    bottom: 4rem;
    right: 0;
  }
`;

const Message = ({ title, subTitle, body }) => {
  const { next } = useContext(StepperContext);
  return (
    <MessageFrame>
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle} </SubTitle>}
      {body && (
        <div className="body-text">
          {body.type === "list" ? (
            <ul className="list">
              {body.strings.map((str, i) => (
                <li key={i}>{str}</li>
              ))}
            </ul>
          ) : (
            body.strings.map((str, i) => <p key={i}>{str}</p>)
          )}
        </div>
      )}

      <Button
        content="Continue"
        height="3rem"
        width="10rem"
        className="next-button"
        border={`1px solid ${getColor("primaryMed")}`}
        bgColor={getColor("primaryLight")}
        color={getColor("primary")}
        fn={next}
      />
    </MessageFrame>
  );
};

export default Message;
