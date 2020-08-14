import React from "react";
import ProjectPage from "./components/ProjectPage";
import { StepperProvider } from "./contexts/StepperContext";
// import ProjectsListingPage from "./components/ProjectsListingPage";

function App() {
  return (
    <StepperProvider>
      <ProjectPage />
    </StepperProvider>
  );
}

export default App;
