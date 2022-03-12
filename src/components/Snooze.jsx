import React, {useState} from 'react'
import styled from "styled-components";
import { RiNotificationOffLine } from "react-icons/ri";
import { RiNotificationLine } from 'react-icons/ri';



  const Snooze = ({pause}) => {
  
 
  return (
      <Section>
     <div className="snooze" onClick={() => {pause()}}>
        {/* <button onClick={pause}>Pause</button> */}
        <RiNotificationOffLine />
        
       
    </div>
      </Section>

  )
}

// const Title = () => {
//    const [title, setTitle] = useState("Click here");

//    return <h1 onClick={() => setTitle("New title")}>{title}</h1>;
// }

export default Snooze


const Section = styled.section`
text-align: center;
background-color: rgba(249,232,204,0.7);
box-shadow: 0 10px 10px -10px rgba(0,0,0,0.3);
padding: 3rem;
border-radius: 20%;
padding-right: 2rem;
padding-bottom: 2rem;
width: 50%;
margin: auto;
padding-left: 2rem;

 .snooze {
   

    width: auto;
    text-align: center;
    font-size: 7rem;
    color: #343f56;
    border-radius: 20%;
    display: inline;
 }
`;