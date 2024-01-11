import React, { useState } from "react";
import { faqData } from "../assets/data/faqData";

const Faq = ({ starIcon, plusIcon, minusIcon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function expandIndex(index) {
    setIsExpanded(index);
  }

  return (
    <div className="bg-white sm:p-10 p-8 max-w-[600px] rounded-xl shadow-xl z-10">
      <div className="flex gap-5 mb-5">
        <img src={starIcon} alt="Star Icon" />
        <h1 className="text-5xl font-bold text-[#2f1533]">FAQs</h1>
      </div>
      <div>
        <ul>
          {faqData.map((card, index) => (
            <li
              className="py-4 border-b-2 border-[#f9f0ff] relative bg-white"
              key={index}
            >
              <div className="flex items-center justify-between gap-5">
                <h2
                  className="font-bold text-[#2f1533] text-lg cursor-pointer hover:text-[#AD28EB]"
                  onClick={() => {
                    if (isExpanded === index) {
                      expandIndex(!isExpanded);
                    } else {
                      expandIndex(index);
                    }
                  }}
                >
                  {card.title}
                </h2>
                <img
                  src={isExpanded === index ? minusIcon : plusIcon}
                  alt={isExpanded === index ? "Minus Icon" : "Plus Icon"}
                />
              </div>
              <p
                className={
                  isExpanded === index
                    ? "text-[#8c6991] py-4 h-auto duration-200 ease-in-out"
                    : "h-0 opacity-0 duration-200 overflow-hidden"
                }
              >
                {card.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
