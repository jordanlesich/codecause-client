import React, { useState } from "react";
import styled from "styled-components";
import { Search } from "react-feather";
import { getColor } from "../helpers";

const SearchBox = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  position: relative;
  display: flex;
  height: ${(props) => props.height};

  .search-icon {
    top: 0;
    left: 0;
    position: absolute;
    color: ${(props) => props.secondColor};
    padding: calc(${(props) => props.height} / 5);
    border-top-left-radius: ${(props) =>
      props.borderRadius ? props.borderRadius : "0"};
    border-bottom-left-radius: 4px;
    background-color: ${(props) => props.color};
    height: ${(props) => props.height};
    width: ${(props) => props.height};
  }
  .search-input {
    top: 0;
    left: 0;
    position: absolute;
    font-size: ${(props) => props.textSize};
    box-sizing: border-box;
    border: none;
    border: ${(props) => props.border};
    border-radius: 4px;
    height: ${(props) => props.height};
    width: calc(${(props) => props.width} - 1px);
    padding-left: calc(${(props) => props.height} + 0.2rem);
    transition: 0.3s all;
    background-color: ${(props) => props.secondColor};
    /* color: ${(props) => props.color}; */
  }
  .search-input:focus {
    width: ${(props) => props.extendWidth};
    outline: none;
  }
`;

const SearchInput = ({
  textSize,
  width,
  height,
  extendWidth,
  borderRadius,
  placeholder,
  color,
  secondColor,
  border,
}) => {
  const [localValue, setLocalValue] = useState("");

  const handleChange = (e) => {
    // handleSearch(e.target.value);
    setLocalValue(e.target.value);
  };

  return (
    <SearchBox
      width={width || "10rem"}
      height={height || "2rem"}
      extendWidth={extendWidth || width}
      borderRadius={borderRadius}
      textSize={textSize || "1rem"}
      color={color || getColor("primary")}
      secondColor={secondColor || getColor("white")}
      border={border || `2px solid ${getColor("primary")}`}
    >
      <input
        className="search-input"
        placeholder={placeholder || `Search`}
        value={localValue}
        onChange={handleChange}
      />
      <Search className="search-icon" />
    </SearchBox>
  );
};

export default SearchInput;
