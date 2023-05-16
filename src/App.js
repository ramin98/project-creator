import "./App.css";
import Navigation from "./Navigation/Navigation";
import StartFirstProject from "./StartFistProject/StartFirstProject";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import CreateProject from "./CreateProject/CreateProject";
import UserInfromation from "./UserInfromation/UserInformation";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  let [projectName, setProjectName] = useState("");
  let [projectURL, setProjectURL] = useState("");
  let [projectCategory, setCategory] = useState("");
  let [mainGoal, setGoal] = useState("");
  let [workers, setWorkers] = useState(0);
  let [product, setProduct] = useState("");
  let [mail, setMail] = useState("");

  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <StartFirstProject
                setProjectName={setProjectName}
                setProjectURL={setProjectURL}
                setCategory={setCategory}
              />
            }
          />
          <Route
            path="/details"
            element={<ProjectDetails setGoal={setGoal} />}
          />
          <Route
            path="/create"
            element={
              <CreateProject
                setWorkers={setWorkers}
                setProduct={setProduct}
                setMail={setMail}
                workers={workers}
              />
            }
          />
          <Route
            path="/user"
            element={
              <UserInfromation
                projectName={projectName}
                projectURL={projectURL}
                projectCategory={projectCategory}
                mainGoal={mainGoal}
                workers={workers}
                product={product}
                mail={mail}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
