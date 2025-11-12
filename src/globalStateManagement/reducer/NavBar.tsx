import { useContext } from "react";
import TaskContext from "../context/taskContext";

export const NavBar = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
    </nav>
  );
};
