import React from 'react';
import styled from "styled-components";
import { cardStyles} from "./ReusuableStyles";
import { BsFillCalendar2WeekFill } from 'react-icons/bs';
import { IoStatsChart } from 'react-icons/io5';
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";

export default function Analytics() {
  return (
    <Section>
      <div className='analytic'>
        <div className='logo'>
          <BsFillCalendar2WeekFill />
        </div>

        <div className='content'>
          <h5>Hours this month</h5>
          <h2> 52 Hrs </h2>
        </div>

      </div>

      <div className='analytic'>
        <div className='logo'>
          <IoStatsChart />
        </div>
        <div className='content'>
            <h5>Minutes</h5>
            <h2>1450</h2>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  .analytic {
    ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ffc107;
      color: #000000;
      svg {
        color: #ffffff;
      }
    }

    .logo {
      background-color: #000000;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;

      svg {
        font-size: 1.5rem;
      }
    }
  }
`;