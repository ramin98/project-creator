import "./CreateProject.css";
import { Link } from "react-router-dom";

export default function CreateProject({
  workers,
  setWorkers,
  setProduct,
  setMail,
}) {
  const getInfo = () => {
    document.getElementById("nav").style.display = "none";
  };

  const setMinus = () => {
    setWorkers(--workers);
  };

  const setPlus = () => {
    setWorkers(++workers);
  };
  const product = (e) => {
    setProduct(e.target.value);
  };

  const mail = (e) => {
    setMail(e.target.value);
  };

  return (
    <div className="create-project">
      <p className="project-instruction-first">Create Project</p>
      <h1>How many full-time workers on the project?</h1>
      <form>
        <div className="count">
          <button onClick={setMinus} id="minus" type="button">
            -
          </button>
          <input type="text" id="workersValue" value={workers} />
          <button onClick={setPlus} id="plus" type="button">
            +
          </button>
        </div>
        <h1>Are you pre or post product launch?</h1>
        <div className="products">
          <label className="radio">
            <input
              onChange={product}
              type="radio"
              name="optionProduct"
              defaultValue="Pre Product"
            />
            <span className="checkmark"></span>
            Pre Product
          </label>
          <label className="radio">
            <input
              onChange={product}
              type="radio"
              name="optionProduct"
              defaultValue="Post Product"
            />
            <span className="checkmark"></span>
            Post Product
          </label>
        </div>
        <h1>Contact Email</h1>
        <input
          onChange={mail}
          type="text"
          className="mail"
          placeholder="awesomenft@gmail.com"
        />
      </form>
      <div className="back-continue">
        <Link to="/details">
          <button className="back">Back</button>
        </Link>
        <Link to="/user">
          <button onClick={getInfo} className="continue">
            Create Project
          </button>
        </Link>
      </div>
    </div>
  );
}
