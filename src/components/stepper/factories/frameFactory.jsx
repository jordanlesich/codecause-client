import React from "react";
import Message from "../frames/message";
import SingleQA from "../frames/singleQA";
import styled from "styled-components";
import { getColor } from "../../../helpers";

const StyledFrame = styled.div`
  border-top: 1px solid ${getColor("lightBorder")};
  color: rgba(41, 41, 41, 1);
  height: 100%;
  font-size: 1.1rem;
  margin-top: 4rem;
  padding: 2rem 2rem 0 2rem;
`;

const getFrame = ({
  type,
  title,
  subTitle,
  body,
  question,
  addData,
  input,
  validation,
  help,
  tag,
}) => {
  const frame = {
    message: <Message title={title} subTitle={subTitle} body={body} />,
    singleQA: (
      <SingleQA
        addData={addData}
        question={question}
        title={title}
        subTitle={subTitle}
        input={input}
        validation={validation}
        help={help}
        tag={tag}
      />
    ),
  };
  return frame[type];
};

const FrameFactory = ({ frame }) => {
  return <StyledFrame>{getFrame(frame)}</StyledFrame>;
};

export default FrameFactory;
