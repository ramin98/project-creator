import "../App.css";

function UserInfromation({
  projectName,
  projectURL,
  projectCategory,
  mainGoal,
  workers,
  product,
  mail,
}) {
  return (
    <div className="user-page">
      <p className="project-instruction-first">{projectName}</p>
      <p className="project-instruction-first">{projectURL}</p>
      <p className="project-instruction-first">{projectCategory}</p>
      <p className="project-instruction-first">{mainGoal}</p>
      <p className="project-instruction-first">{workers}</p>
      <p className="project-instruction-first">{product}</p>
      <p className="project-instruction-first">{mail}</p>
    </div>
  );
}

export default UserInfromation;
