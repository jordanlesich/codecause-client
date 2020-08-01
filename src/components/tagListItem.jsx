import React from "react";
import styled from "styled-components";
import { LargeTag, SmallTag } from "../components/tag";
import { getColor } from "../helpers";

const SmallListItem = styled(SmallTag)`
  font-size: 1rem;
  padding: 0.5rem;
`;

const LargeListItem = styled(LargeTag)`
  display: block;
  width: 100%;
  /* margin: 0 auto; */

  /* padding: 0.5rem; */
  border: none;
  border-bottom: 1px solid ${getColor("lightBorder")};
`;

const Tag = ({ text, type, value, fn }) => {
  return (
    <>
      {type === "skill" && (
        <SmallListItem value={value} as={SmallListItem} onClick={fn}>
          {text}
        </SmallListItem>
      )}
      {type === "project" && (
        <LargeListItem value={value} as={LargeListItem} onClick={fn}>
          {text}
        </LargeListItem>
      )}
      {type === "cause" && (
        <LargeListItem value={value} as={LargeListItem} onClick={fn}>
          {text}
        </LargeListItem>
      )}
    </>
  );
};

export default Tag;
