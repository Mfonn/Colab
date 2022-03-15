import React from 'react'
import styled from "styled-components";

function Loading
() {
  return (
    <div>
    <Section>
       <div class="loadingio-spinner-bean-eater-ri2g1mi889"><div class="ldio-6dzj65qbg0m">
        <div><div>E</div><div>Y</div><div>E</div></div><div><div></div><div></div><div></div></div>
        </div></div>
    </Section>    
    </div>
  )
}

export default Loading

const Section = styled.section`

margin-top: 15%;
margin-left: 40%;


@keyframes ldio-6dzj65qbg0m-1 {
    0% { transform: rotate(0deg) }
   50% { transform: rotate(-45deg) }
  100% { transform: rotate(0deg) }
}
@keyframes ldio-6dzj65qbg0m-2 {
    0% { transform: rotate(180deg) }
   50% { transform: rotate(225deg) }
  100% { transform: rotate(180deg) }
}
.ldio-6dzj65qbg0m > div:nth-child(2) {
  transform: translate(-15px,0);
}
.ldio-6dzj65qbg0m > div:nth-child(2) div {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 120px;
  height: 60px;
  border-radius: 120px 120px 0 0;
  background: #f8b26a;
  animation: ldio-6dzj65qbg0m-1 1s linear infinite;
  transform-origin: 60px 60px
}
.ldio-6dzj65qbg0m > div:nth-child(2) div:nth-child(2) {
  animation: ldio-6dzj65qbg0m-2 1s linear infinite
}
.ldio-6dzj65qbg0m > div:nth-child(2) div:nth-child(3) {
  transform: rotate(-90deg);
  animation: none;
}@keyframes ldio-6dzj65qbg0m-3 {
    0% { transform: translate(190px,0); opacity: 0 }
   20% { opacity: 1 }
  100% { transform: translate(70px,0); opacity: 1 }
}
.ldio-6dzj65qbg0m > div:nth-child(1) {
  display: block;
}
.ldio-6dzj65qbg0m > div:nth-child(1) div {
  position: absolute;
  top: 92px;
  left: -8px;
  width: 16px;
  height: 16px;
  color: #342f56;
  animation: ldio-6dzj65qbg0m-3 1s linear infinite
}
.ldio-6dzj65qbg0m > div:nth-child(1) div:nth-child(1) { animation-delay: -0.67s }
.ldio-6dzj65qbg0m > div:nth-child(1) div:nth-child(2) { animation-delay: -0.33s }
.ldio-6dzj65qbg0m > div:nth-child(1) div:nth-child(3) { animation-delay: 0s }
.loadingio-spinner-bean-eater-ri2g1mi889 {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
}
.ldio-6dzj65qbg0m {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-6dzj65qbg0m div { box-sizing: content-box; }
`;