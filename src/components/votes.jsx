import React from "react";
import styled from "styled-components";
import { Triangle } from "react-feather";
import { getColor } from "../helpers";

const VoteBox = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
  border: 1px solid ${getColor("lightBorder")};
  border-radius: 4px;
  transition: 0.15s all;
  background-color: ${getColor("white")};

  .vote {
    display: flex;
    color: ${getColor("secondary")};
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    margin: 0.125rem;
    padding: 2px;
    border-radius: 50%;
    border: 2px solid ${getColor("secondary")};
    cursor: pointer;
    transition: 0.2s all;
  }
  .vote:hover {
    color: ${getColor("dark")};
  }
  .downvote {
    transform: rotate(-180deg);
  }
  .vote-text {
    color: ${getColor("secondary")};
    font-weight: 500;
    margin-left: 0.25rem;
  }
`;

const Votes = () => {
  return (
    <VoteBox>
      <Triangle className="upvote vote" />
      <Triangle className="downvote vote" />
      <p className="vote-text">0</p>
    </VoteBox>
  );
};

export default Votes;
