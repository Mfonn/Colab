import React from 'react';
import { FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Msg = () => (
  <div>
    Rub your hands and gently place your warm hands over your eyes, with fingertips on the forehead.
  </div>
)


function Notification() {

    const displayMsg = () => {
    toast(<Msg />) 
  }

    const closeButton = ({ closeToast }) => {
      <button onClick={closeToast}></button>
    }

  return (
    <div>
      <h4>It is time to rest you eyes</h4>
     <button onClick={displayMsg}>Accept</button>
     <button onClick={closeButton}>Close</button>
     </div>
  )
}

export default Notification
