import React from "react";
import styled from "styled-components";
import { formatDistanceToNow, parseISO } from "date-fns";
import Avatar from "../components/avatar";
import Votes from "../components/votes";

import {
  getColor,
  fakeProjectTags,
  fakeSkillTags,
  fakeCauseTags,
  getFakeTags,
} from "../helpers";

const ListItem = styled.li`
  display: flex;
  position: relative;
  background-color: ${getColor("white")};
  width: 40rem;
  padding: 0.5rem 0;
  list-style: none;
  border-top: 1px solid ${getColor("lightBorder")};
  border-radius: 4px;
  transition: 0.2s all;
  .posted-by-panel {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    align-items: center;
    padding: 0 2rem;
    margin-top: 0.8rem;
    margin-bottom: 0.5rem;
  }
  .avatar-wrapper {
    margin-bottom: 0.25rem;
  }
  .posted-by-text {
    text-align: center;
    margin-bottom: 0.5rem;
  }
  .project-created-at {
    opacity: 0.8;
  }
  .info-wrapper {
    border-left: 1px solid ${getColor("lightBorder")};
    padding-left: 1.5rem;
  }
  .project-name {
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 500;
    margin: 0.25rem;
    padding: 0.25rem;
    color: ${getColor("primary")};
  }
  .project-name:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .project-description {
    margin: 0 0.25rem;
    padding: 0.25rem;
  }
  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    flex-basis: auto;
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }
  .skill-tag {
    color: ${getColor("primary")};
    /* opacity: 0.8; */
    font-weight: 500;
    padding: 0.25rem;
    margin: 0.25rem;
    cursor: pointer;
    background-color: rgba(0, 112, 243, 0);
    border-radius: 10%;
    transition: 0.15s all;
  }
  .skill-tag:hover {
    background-color: rgba(0, 112, 243, 0.2);
  }
  .project-tag {
    margin-left: 0.75rem;
    padding: 0.25rem;
    border: 1px solid ${getColor("lightBorder")};
    border-radius: 4px;
    font-weight: 500;
    color: ${getColor("secondary")};
    cursor: pointer;
    transition: 0.15s all;
  }
  .project-tag:hover {
    background-color: ${getColor("lightgrey")};
    color: ${getColor("dark")};
  }
  .cause-tag {
    margin-left: 0.75rem;
    padding: 0.25rem;
    border: 1px solid ${getColor("lightBorder")};
    border-radius: 4px;
    font-weight: 500;
    color: ${getColor("secondary")};
    cursor: pointer;
    transition: 0.15s all;
  }
  .cause-tag:hover {
    background-color: ${getColor("lightgrey")};
    color: ${getColor("dark")};
  }
  .bottom-section {
    display: flex;
    margin-bottom: 0.5rem;
  }
  .vote-wrapper {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
  }
`;

const Project = ({ project }) => {
  return (
    <ListItem>
      <div className="posted-by-panel">
        <span className="avatar-wrapper">
          <Avatar />
        </span>

        <span className="posted-by-text">
          <p className="project-creator">
            {/* {project.author.name || "Creator fallback"} */}
            Posted By:
          </p>
          <p>fallback</p>
        </span>
        <p className="project-created-at">
          {formatDistanceToNow(parseISO(project.created_at), {
            addSuffix: true,
          })}
        </p>
      </div>
      <div className="info-wrapper">
        <span className="vote-wrapper">
          <Votes />
        </span>
        <h2 className="project-name">{project.name}</h2>
        <p className="project-description">{project.description}</p>
        <div className="skill-tags">
          {getFakeTags(fakeSkillTags, 4, 5).map((tag, index) => {
            return (
              <span key={index} className="skill-tag">
                {tag + " "}
              </span>
            );
          })}
        </div>
        <div className="bottom-section">
          <div className="project-tag">
            {getFakeTags(fakeProjectTags, 1, 1).map((tag, index) => {
              return (
                <span key={index} className="tag">
                  {tag + " "}
                </span>
              );
            })}
          </div>
          <div className="cause-tag">
            {getFakeTags(fakeCauseTags, 1, 1).map((tag, index) => {
              return (
                <span key={index} className="tag">
                  {tag + " "}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </ListItem>
  );
};

export default Project;
