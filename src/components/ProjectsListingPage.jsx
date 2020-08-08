import React, { useState } from "react";
import Layout from "./layout";
import styled from "styled-components";

import ProjectListItem from "./projectListItem";
import SearchInput from "./searchInput";

import {
  getColor,
  getFakeData,
  fakeSkillTags,
  fakeProjectTags,
  fakeCauseTags,
} from "../helpers";
import TagListing from "./tagListing";

const ListingSpace = styled.div`
  width: 1000px;
  margin: 0 auto;
  margin-top: 2.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .listing-section {
    .listing-title {
      font-size: 3rem;
      margin-bottom: 2.5rem;
      font-weight: 300;
    }
  }
  .tag-section {
    margin-right: 6vw;
    background-color: ${getColor("lightgrey")};
  }
  .search-spacer {
    display: inline-block;
    margin: 1rem 0;
  }
`;

const ProjectsPage = () => {
  const [projects] = useState(getFakeData());
  const [tagType, setTagType] = useState("skill");

  const switchTagType = (e) => {
    setTagType(e.target.value);
  };

  return (
    <Layout>
      <ListingSpace>
        <section className="tag-section">
          <span className="search-spacer">
            <SearchInput
              width="14rem"
              extendWidth="16rem"
              textSize="1.2rem"
              color={getColor("darkgrey")}
              height="2.5rem"
              border={`2px solid ${getColor("darkgrey")}`}
            />
          </span>
          {tagType === "skill" && (
            <TagListing
              type={"skill"}
              tags={fakeSkillTags}
              switchTagType={switchTagType}
            />
          )}
          {tagType === "project" && (
            <TagListing
              type={"project"}
              tags={fakeProjectTags}
              switchTagType={switchTagType}
            />
          )}
          {tagType === "cause" && (
            <TagListing
              type={"cause"}
              tags={fakeCauseTags}
              switchTagType={switchTagType}
            />
          )}
        </section>
        <section className="listing-section">
          <h1 className="listing-title">{projects.length} Project Requests</h1>
          <ul>
            {projects &&
              projects.map((project) => {
                return <ProjectListItem project={project} key={project.id} />;
              })}
          </ul>
        </section>
      </ListingSpace>
      {/* <button onClick={getProjects}> GET ASYNC PROJECTS </button> */}
    </Layout>
  );
};

export default ProjectsPage;
