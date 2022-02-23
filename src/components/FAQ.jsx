import React from 'react';
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { cardStyles } from "./ReusuableStyles";


export default function FAQ() {

    const faqs = [
        {
            icon: <AiFillCalendar />,
            text: "How to schedule your notifications",
        },

        {
            icon: <MdTimelapse />,
            text: "How to schedule your notications daily",
        },
    ];

  return (
    <Section>
        <div className='title'>
            <h2>Information</h2>
        </div>

        <div className='faqs'>
            {faqs.map((faq, index) => {
                return (
                    <div className='faq' key={index}>
                        <div className='info'>
                            {faq.icon}
                            <h4>{faq.text}</h4>
                        </div>
                        <IoIosArrowForward />
                    </div>
                )
            })}
        </div>
    </Section>
  )
}

const Section = styled.section`
  ${cardStyles};
  .title {
    h2 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        font-size: 1.4rem;
      }
      &:nth-of-type(2) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }
    `;
