import "./ProjectDetails.css";
import { Link } from "react-router-dom";

export default function ProjectDetails({ setGoal }) {
  const goal = (e) => {
    setGoal(e.target.value);
  };
  return (
    <div className="project-details">
      <p className="project-instruction-first">Project Details</p>
      <h1>What is your main goal with AlphaQuest?</h1>
      <form>
        <label className="radio">
          <input
            onChange={goal}
            type="radio"
            name="option"
            defaultValue="Grow My Community"
          />
          <span className="checkmark"></span>
          Grow My Community
        </label>
        <label className="radio">
          <input
            onChange={goal}
            type="radio"
            name="option"
            defaultValue="Activate Existing Members"
          />
          <span className="checkmark"></span>
          Activate Existing Members
        </label>
        <label className="radio">
          <input
            onChange={goal}
            type="radio"
            name="option"
            defaultValue="Understand My Members"
          />
          <span className="checkmark"></span>
          Understand My Members
        </label>
        <label className="radio">
          <input
            onChange={goal}
            type="radio"
            name="option"
            defaultValue="Other"
          />
          <span className="checkmark"></span>
          Other
        </label>
      </form>
      <div className="back-continue">
        <Link to="/">
          <button className="back">Back</button>
        </Link>
        <Link to="/create">
          <button className="continue">Continue</button>
        </Link>
      </div>
    </div>
  );
}
