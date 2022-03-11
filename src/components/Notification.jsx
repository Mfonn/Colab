import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";

const Msg = () => (
  <div>
    Rub your hands and gently place your warm hands over your eyes, with fingertips on the forehead.
  </div>
)



function Notification({setCount, count}) {

  console.log(count)

    
  

    const closeButton = ({ closeToast }) => {
      <button onClick={closeToast}></button>
    }

    const ColoredLine = ({ color, padding, marginTop, marginBottom }) => (
  <hr
    style={{
      color,
      height: 1,
      marginTop, 
      marginBottom
    }}
  />
);

    function displayMsg() {
      toast(<Msg />);
      setCount(count+1);
    }


   
 



  return (
    <Section>
      <div className="row">
        <div  className="column left">
          <div className="row">
            <div className="column right">
              <h2 className="circle">circle</h2>
            </div>

            <div className="column left">
              <h4>It is time to rest you eyes</h4>
            </div>
            
            
          </div>
        
     
        </div>
      <div className="column right">
        

      <button className="noti" onClick={displayMsg}>Accept</button>
      <ColoredLine color="#e6e6e6" marginTop="0.5rem" marginBottom="0.5rem" />
     <button className="noti" onClick={closeButton}>Ignore</button>
  
      </div>

     </div>
     
    </Section>

  )
}

export default Notification

const Section = styled.section`
//   .row:after {
//   content: "";
//   display: table;
//   clear: both;
// }

    .column {
      float: left;
    }

    .left {
      width: 75%;
      border-right: 1px solid #e6e6e6;
      height: 100%;
    }

    .right {
      width: 25%;
    }
 

  .Toastify__close-button--light {
    display: none;
  }

  .Toastify__toast-container--top-right {
    top: 1em;
    right: 1em;
    border-radius: 10%;

    padding: 0;
}

.Toastify__toast-body {
  padding: 0;
}

  .noti{
    background-color: #ffffff;
    border-radius: 0%;
    height: auto;

    font-size: 0.8rem;
    font-weight: 600;

    padding: 0.2rem;
    margin: 0;

    border: 0;
  }

  .vl {
  
    border-left: 1px solid #e6e6e6; 
    height: 3rem;
    display: inline-block
    // width: 1%;
    // display: inline-block;
    // padding: 0;
    // margin: 0;


  }

.Toastify__toast-theme--light, .Toastify__toast, .Toastify__toast--default {
  height: auto;
  color: #342f56;
  padding: 0.5rem;
}

  --toastify-color-progress-light: linear-gradient(
    to right,
     #ffbc5a, #f3d189, #ffe7c4
  );

  --toastify-toast-width: 400px;


  .circle {
    
  }
`;