import React from 'react';
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";


export default function() {
  return (
    <div>
      <Sidebar />
      <Dashboard />
    </div>
  );
}


const Div = styled.div``;