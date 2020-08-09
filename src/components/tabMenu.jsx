import React, { useState } from "react";
import styled from "styled-components";
import { X } from "react-feather";
import Button from "./button";

import { fadeIn, fadeOut } from "../anims";
import { getColor } from "../helpers";

const StyledTabMenu = styled.div`
height: 100%;
background-color: ${getColor("white")};

  .in {
    opacity: 1;
  }
  .anim-in {
    animation: ${fadeIn} 0.2s ease-in both;
  }
  .anim-out {
    animation: ${fadeOut} 0.2s ease-out both;
  }
  .out {
    opacity: 0;
  }
  .tab-title {
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
  }
  .tab-frame {
  height: 100%;
    /* border: 1px solid ${getColor("lightborder")}; */
  }
  .tab-stage{
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tab-buttons-bar {
    display: flex;
    justify-content: center;
    z-index: 30;
    background-color: ${getColor("dark")};
    border-radius: 0px;
    width: 100%;
  }
  .closeButton {
    border-right: none;
  }
  .tabButton {
    transition: 0.2s;
    border-bottom: none;
    border-left: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .tabButton:hover {
    background-color: #182533;
    color: ${getColor("lightBorder")};
    box-shadow: none;
  }
  .selected {
    color: ${getColor("dark")};
    background-color: ${getColor("white")};
  }
  .tabButton.selected:hover {
    color: ${getColor("dark")};
    background-color: ${getColor("white")};
  }
  
`;
const TabMenu = ({ options, title, closeDrawer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [fadeAnim, setFadeAnim] = useState("out");

  const switchOption = (val) => {
    setSelectedOption(options.find((option) => option.value === val));
  };

  const handleTabChange = (e) => {
    //do nothing if in the process of animation
    if (fadeAnim === "anim-in" || fadeAnim === "anim-out") return;
    //open first tab
    if (selectedOption === null && fadeAnim === "out") {
      setFadeAnim("anim-in");
      switchOption(e.target.value);
      setTimeout(() => {
        setFadeAnim("in");
      }, 200);
      return;
    }
    //if user clicked tab that is already open, close it.
    if (selectedOption.value === e.target.value && fadeAnim === "in") {
      setFadeAnim("anim-out");
      setTimeout(() => {
        setFadeAnim("out");
        setSelectedOption(null);
      }, 200);
      return;
    }
    //if user clicked a different tab than the one that is already open,
    //then fade out, then into the new tab
    if (selectedOption.value !== e.target.value && fadeAnim === "in") {
      setFadeAnim("anim-out");
      const form = e.target.value;
      setTimeout(() => {
        setFadeAnim("out");
        switchOption(null);
      }, 200);
      setTimeout(() => {
        setFadeAnim("anim-in");
        switchOption(form);
      }, 300);
      setTimeout(() => {
        setFadeAnim("in");
      }, 500);
    }
  };

  return (
    <>
      <StyledTabMenu>
        <h2 className="tab-title">{title}</h2>
        <div className="tab-frame">
          <div className="tab-buttons-bar">
            {options &&
              options.map(({ tabContent, value }, index) => (
                <Button
                  key={index}
                  className={"tabButton"}
                  content={tabContent}
                  value={value}
                  fn={handleTabChange}
                  height="4rem"
                  width={`${100 / options.length}%`}
                  bgColor={getColor("dark")}
                  border={`1px solid ${getColor("secondary")}`}
                  selected={
                    selectedOption != null && value === selectedOption.value
                  }
                />
              ))}
            <Button
              className="tabButton closeButton"
              content={<X />}
              value="close-button"
              fn={closeDrawer}
              height="4rem"
              width={`${100 / options.length}%`}
              bgColor={getColor("dark")}
              border={`1px solid ${getColor("secondary")}`}
            />
          </div>

          <div className={`tab-stage ${fadeAnim}`}>
            {selectedOption != null && selectedOption.render}
          </div>
        </div>
      </StyledTabMenu>
    </>
  );
};

export default TabMenu;
