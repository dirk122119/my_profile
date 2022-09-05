import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import { BrowserRouter ,HashRouter, Route,Routes } from "react-router-dom";
import { useState ,useEffect} from "react";

import React from 'react';
import CollapseCard from "./components/CollapseCard";
import Ghpage from "./components/Ghpage";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

const Dashboard = (props) => <div className={`container ${props.inactive ? "inactive" : ""}`}><Ghpage /></div>;
const Content1 = (props) => <div className={`container ${props.inactive ? "inactive" : ""}`}><Resume /></div>;
const Content2 = (props) => <div className={`container ${props.inactive ? "inactive" : ""}`}><Projects /></div>;


function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
    <HashRouter>
      <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
      <Routes>
        <Route exact path="/" element={<Dashboard inactive={inactive} />}/>
        <Route exact path="resume" element={<Content1 inactive={inactive} />}/>
        <Route exact path="projects">
          <Route index element={<Content2 inactive={inactive} />} />
          <Route exact path="1" element={<Dashboard inactive={inactive}/>} />
          <Route exact path="2" element={<Dashboard inactive={inactive}/>} />
        </Route>
        {/* <Route exact path="content">
          <Route index element={<Content inactive={inactive} />} />
          <Route exact path="courses" element={<Dashboard inactive={inactive}/>} />
          <Route exact path="videos" element={<Dashboard inactive={inactive}/>} />
        </Route> */}
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;

