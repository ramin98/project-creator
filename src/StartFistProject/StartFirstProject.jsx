import "./StartFistProject.css";
import { Link } from "react-router-dom";

export default function StartFistProject({
  setProjectName,
  setProjectURL,
  setCategory,
}) {
  const category = (e) => {
    setCategory(e.target.value);
  };

  const Setname = (e) => {
    setProjectName(e.target.value);
  };

  const Seturl = (e) => {
    setProjectURL(e.target.value);
  };
  return (
    <div className="start-first-project">
      <p className="project-instruction-first">
        To Create Quest you need firstly create Project
      </p>
      <h1>Add New Project</h1>
      <div>
        <label className="project-instruction" htmlFor="ProjectName">
          Project Name (It can be changed later)
        </label>
        <input
          onChange={Setname}
          type="text"
          id="ProjectName"
          placeholder="Awesome NFT Punch"
        />
      </div>
      <div>
        <label className="project-instruction" htmlFor="ProjectURL">
          Project URL (It cannot be changed after creation)
        </label>
        <input
          onChange={Seturl}
          type="text"
          id="ProjectURL"
          placeholder="Alphaguilty.io/awesomenftpunch"
        />
      </div>
      <div>
        <p className="project-instruction">
          Project Category (It cannot be changed after creation)
        </p>
        <div className="category">
          <div>
            <input
              onChange={category}
              name="categoryRadio"
              id="nft"
              type="radio"
              defaultValue="NFT"
            />
            <label htmlFor="nft">NFT</label>
          </div>
          <div>
            <input
              onChange={category}
              name="categoryRadio"
              id="gamefi"
              type="radio"
              defaultValue="GameFi"
            />
            <label htmlFor="gamefi">GameFi</label>
          </div>
          <div>
            <input
              onChange={category}
              name="categoryRadio"
              id="defi"
              type="radio"
              defaultValue="DeFi"
            />
            <label htmlFor="defi">DeFi</label>
          </div>
          <div>
            <input
              onChange={category}
              name="categoryRadio"
              id="dao"
              type="radio"
              defaultValue="DAO"
            />
            <label htmlFor="dao">DAO</label>
          </div>
          <div>
            <input
              onChange={category}
              name="categoryRadio"
              id="socialfi"
              type="radio"
              defaultValue="SocialFi"
            />
            <label htmlFor="socialfi">SocialFi</label>
          </div>
          <div>
            <input
              onChange={category}
              name="categoryRadio"
              id="metaverse"
              type="radio"
              defaultValue="Metaverse"
            />
            <label htmlFor="metaverse">Metaverse</label>
          </div>
          <div>
            <input
              onChange={category}
              name="categoryRadio"
              id="tools"
              type="radio"
              defaultValue="Tools"
            />
            <label htmlFor="tools">Tools</label>
          </div>
          <div>
            <input
              onChange={category}
              name="categoryRadio"
              id="ecosystem"
              type="radio"
              defaultValue="Ecosystem"
            />
            <label htmlFor="ecosystem">Ecosystem</label>
          </div>
          <div>
            <input
              onChange={category}
              name="categoryRadio"
              id="others"
              type="radio"
              defaultValue="Others"
            />
            <label htmlFor="others">Others</label>
          </div>
        </div>
      </div>
      <Link to="/details">
        <button className="add-project">Add Project</button>
      </Link>
    </div>
  );
}
