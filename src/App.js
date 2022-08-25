import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import { BrowserRouter ,HashRouter, Route,Routes } from "react-router-dom";
import { useState } from "react";

import React from 'react';
const Dashboard = (props) => <div className={`container ${props.inactive ? "inactive" : ""}`}><h1>Dashboard</h1><h2>fffffff</h2></div>;
const Content = (props) => <div className={`container ${props.inactive ? "inactive" : ""}`}><h1>Content</h1></div>;
const Courses = () => <h1>Content/Courses</h1>;
const Videos = () => <h1>Content/Videos</h1>;
const Design = () => <h1>Design</h1>;
const Content2 = () => <h1>Content2</h1>;
const Courses2 = () => <h1>Content/Courses 2</h1>;
const Videos2 = () => <h1>Content/Videos 2</h1>;
const Design2 = () => <h1>Design 2</h1>;

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
        <Route exact path="content">
          <Route index element={<Content inactive={inactive} />} />
          <Route exact path="courses" element={<Dashboard inactive={inactive}/>} />
          <Route exact path="videos" element={<Dashboard inactive={inactive}/>} />
        </Route>
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
