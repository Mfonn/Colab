import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
// import Sidebar from "./components/Sidebar";
import Settings from "./components/Settings";




export default function() {
  return (
    <Router>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}


const Div = styled.div``;