import "./Navigation.css";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  let location = useLocation();

  return (
    <>
      <nav id="nav">
        <ul>
          <li
            className={
              location.pathname === "/start"
                ? ""
                : location.pathname === "/details"
                ? "nav-state-second"
                : location.pathname === "/create"
                ? "nav-state-third"
                : ""
            }
          >
            <span>Start First Project</span>
          </li>
          <li
            className={
              location.pathname === "/start"
                ? ""
                : location.pathname === "/details"
                ? "nav-state-second"
                : location.pathname === "/create"
                ? "nav-state-third"
                : ""
            }
          >
            <span>Project Details</span>
          </li>
          <li
            className={
              location.pathname === "/start"
                ? ""
                : location.pathname === "/details"
                ? "nav-state-second"
                : location.pathname === "/create"
                ? "nav-state-third"
                : ""
            }
          >
            <span> Project</span>
          </li>
        </ul>
        <div className="gradient"></div>
      </nav>
    </>
  );
}
