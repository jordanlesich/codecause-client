import React from "react";
import Layout from "./layout";
import styled from "styled-components";
// import { formatDistanceToNow, parseISO } from "date-fns";

// import Votes from "./votes";
// import Avatar from "./avatar";
// import Tag from "./tag";
// import Button from "./button";
import ProjectBar from "./projectBar";
import Drawer from "./drawer";
import WhitePaper from "./whitePaper";
// import SearchInput from "./searchInput";

// import { getColor } from "../helpers";
// import TagListing from "./tagListing";

const StyledProjectPage = styled.div`
  /* position: relative; */
  display: grid;
  grid-template-columns: ${(props) => props.sideBarWidth} minmax(auto, 50px) ${(
      props
    ) => props.projectWidth} auto;
`;
const ProjectSpace = styled.div`
  width: ${(props) => props.width};
  margin: 0;
  grid-column: 3/4;
  grid-row: 1;
`;

const ProjectsPage = () => {
  const sideBarWidth = "400px";
  const projectWidth = "1000px";
  return (
    <Layout>
      <StyledProjectPage
        sideBarWidth={sideBarWidth}
        ProjectSpace={projectWidth}
      >
        <Drawer width={"400px"} />
        <ProjectSpace width={projectWidth}>
          <ProjectBar />
          <WhitePaper />
        </ProjectSpace>
      </StyledProjectPage>
    </Layout>
  );
};

export default ProjectsPage;
