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

    function purr (number) {
        const time = new Date();

        time.setSeconds(time.getSeconds() + number);
        restart(time)

    }

    function kulp(numb, number){
      
          setInterval(
          () => purr(number),
          numb
          );
        
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
    
      
      <button value="20" className = "jiggle" onClick={ () =>  {purr(10); kulp(1100* 10, 10);}}

      >20</button>

       <button className="jiggle" onClick={() => {purr(1500); kulp(1600*1000, 1500);

      }}>25</button>

        <button className="jiggle" onClick={() => {purr(1800); kulp(1900*1000, 1800);
        
      }}>30</button>

        <button className="jiggle" onClick={() => {purr(2700); kulp(2800*1000, 2700);

      }}>45</button>

      

              <ToastContainer 
         limit={1}
         

         />
         </Section>

      
  
  );
}

export default MyTimer



const Section = styled.section`
button {
  .jiggle {
  background-color: blue;
  padding: 10px;
  color: pink;
  }
}
`;