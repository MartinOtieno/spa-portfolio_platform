import { useState } from 'react'
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import AddProjectForm from "./components/AddProjectForm";
import { initialProjects } from "./data/projects";
import "./styles/styles.css";

function App() {
  const [projects, setProjects] =useState(initialProjects);
  const [search, setSearch] = useState("");

  const addProject = (project) => { setProjects([...projects, {...project, id: Date.now() }])};

  const filteredprojects = projects.filter ((project)=> project.title.lowerCase().includes(search.totalCase()));

  return (
    <>
    <Header />
    <SearchBar search={setSearch} />
    <ProjectList projects={filteredprojects} />
    <AddProjectForm addProject={addProject} />
    </>
  );
}

export default App
