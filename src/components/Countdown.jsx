import React from 'react';
import { useTimer } from 'react-timer-hook';
import { useEffect } from 'react';
import { BsCheckCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notification from './Notification';
import styled from "styled-components";




function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => bongo() });

     function bongo () {
      var intID = setTimeout(notify, 1000);

       function notify () {
          toast(() => <div>
            <Notification />
          </div>);

      

    }
     }

  return (
    <Section>
      <div>
      <div style={{fontSize: '100px', textAlign: 'center'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      </div>
    

      <button className = "jiggle" onClick={() => {
        
        const time = new Date();
        time.setSeconds(time.getSeconds() + 10);
        restart(time)

        
      }}>20</button>

       <button className="jiggle" onClick={() => {
        
        const time = new Date();
        time.setSeconds(time.getSeconds() + 1500);
        restart(time)
      }}>25</button>

        <button className="jiggle" onClick={() => {
        
        const time = new Date();
        time.setSeconds(time.getSeconds() + 1800);
        restart(time)
      }}>30</button>

        <button className="jiggle" onClick={() => {

        const time = new Date();
        time.setSeconds(time.getSeconds() + 2700);
        restart(time)
      }}>45</button>

      

              <ToastContainer 
         limit={1}
         

         />
         </Section>

      
  
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 50); // timer it begins with
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    
    </div>
  );
}



const Section = styled.section`
button {
  .jiggle {
  background-color: blue;
  padding: 10px;
  color: pink;
  }
}
`;