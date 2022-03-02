import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import { MdSpaceDashboard } from "react-icons/md";
import { RiEyeCloseFill } from "react-icons/ri";
import { FiLogOut, FiSettings } from "react-icons/fi";


export default function Sidebar() {

  let navigate = useNavigate();

  const [currentLink, setCurrentLink] = useState(1)
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  return (
    <div>
      <Section>
        <div className='top'>
          <div className='brand'>
            <RiEyeCloseFill />
            <span>My Dash</span>
          </div>
          <div className='toggle'></div>
          <div className='links'>
            <ul>
              <li onClick={() => setCurrentLink(1)}
              className={currentLink ===1 ? "active" : ""}>
                <a href="#" onClick={() => {
                  navigate("/");
                }}>
                  <MdSpaceDashboard />
                  <span>
                    Dashboard
                    </span>
                </a>
                </li>

              <li onClick={() => setCurrentLink(2)}
              className={currentLink ===2 ? "active" : ""}>
                <a href="#" onClick={() => {
                  navigate("Settings");
                }}>
                  <FiSettings />
                  <span>
                    Settings
                  </span>
                </a>
                </li>

{/* 
              <li onClick={() => setCurrentLink(3)}
              className={currentLink ===3 ? "active" : ""}>
                <a href="#">
                  <BsFillChatTextFill />
                  <span>FAQs</span>
                </a>
                </li> */}


            </ul>
          </div>
        </div>

        <div className='logout'>
          <a href="#">
            <FiLogOut />
            <span className="logout">EXIT</span>
          </a>
        </div>
      </Section>

      <ResponsiveNav 
        state={navbarState}
        className={navbarState ? "show" : ""}
        >

        <div className='responsive__links'>
            <ul>
              <li onClick={() => setCurrentLink(1)}
              className={currentLink ===1 ? "active" : ""}>
                <a href="#" onClick={() => {
                  navigate("/");
                }}>
                  <MdSpaceDashboard />
                  <span>
                    Dashboard
                    </span>
                </a>
                </li>

              <li onClick={() => setCurrentLink(2)}
              className={currentLink ===2 ? "active" : ""}>
                <a href="#" onClick={() => {
                  navigate("Settings");
                }}>
                  <FiSettings />
                  <span>
                    Settings
                  </span>
                </a>
                </li>

{/* 
              <li onClick={() => setCurrentLink(3)}
              className={currentLink ===3 ? "active" : ""}>
                <a href="#">
                  <BsFillChatTextFill />
                  <span>FAQs</span>
                </a>
                </li> */}


            </ul>
        </div>
      </ResponsiveNav>
    </div>
  )
}

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
      }
    }
  }
  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }

  @media screen add (min-width: 200px) and (max-width: 1000px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      .toggle {
        display: block;
        color: #ffffff;
        z-index: 10;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top >.links, 
    .logout {
      display: none;
    }
  }
  `;


  const ResponsiveNav = styled.nav`
    position: fixed;
    right: -10vw;
    top: 0;
    z-index: 20;
    background-color: #000000;
    heighht: 100vh;
    
  `;