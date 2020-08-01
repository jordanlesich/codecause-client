import React from "react";
import styled from "styled-components";

import Select from "../components/select";
import TagListItem from "../components/tagListItem";
import { getColor } from "../helpers";

const StyledTagListing = styled.aside`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* height: 30rem; */
  display: block;
  border-radius: 4px;
  width: 14rem;
  margin: 0;
  border: 1px solid ${getColor("lightBorder")};
    background-color: ${getColor("white")};

  .title-wrapper {
background-color: ${getColor("white")};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  }
  .listing-title {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: capitalize;
    border-bottom: 1px solid ${getColor("lightBorder")};
    padding: 1rem;
    color: ${getColor("dark")};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: ${getColor("white")};
    /* border-bottom: 1px solid ${getColor("lightBorder")}; */
  }
  ul{
      border-top: 1px solid ${getColor("lightBorder")};
      margin-bottom: 3rem;
  }
`;

const TagListing = ({ tags, type, switchTagType }) => {
  console.log(tags);
  return (
    <StyledTagListing type={type}>
      <div className="title-wrapper">
        <Select
          height="3rem"
          fn={switchTagType}
          id="lisitng-Select"
          label=" "
          value={type}
          options={[
            { name: "Skill Tags", value: "skill" },
            { name: "Project Tags", value: "project" },
            { name: "Cause Tags", value: "cause" },
          ]}
        />
        {/* <h3 className="listing-title"> {type} tags </h3> */}
      </div>

      <ul>
        {tags &&
          tags.map((tag) => {
            return (
              <TagListItem key={tag} text={tag} type={type} value={tag}>
                {tag.name}
              </TagListItem>
            );
          })}
      </ul>
    </StyledTagListing>
  );
};

export default TagListing;
