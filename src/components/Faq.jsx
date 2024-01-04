import { React, useState } from "react";

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
          <li className="py-4 border-b-2 border-[#f9f0ff] relative bg-white">
            <div className="flex items-center justify-between gap-5">
              <h2
                className="font-bold text-[#2f1533] text-lg cursor-pointer hover:text-[#AD28EB]"
                onClick={() => {
                  if (isExpanded == 1) {
                    expandIndex(!isExpanded);
                  } else {
                    expandIndex(1);
                  }
                }}
              >
                What is Frontend Mentor, and how will it help me?
              </h2>
              <img
                src={isExpanded === 1 ? minusIcon : plusIcon}
                alt="Minus Icon"
              />
            </div>
            <p
              className={
                isExpanded == 1
                  ? "text-[#8c6991] py-4 h-auto duration-200 ease-in-out"
                  : "h-0 opacity-0 duration-200 overflow-hidden"
              }
            >
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS and JavaScript, it's suitable for all levels and ideal
              for portfolio building.
            </p>
          </li>
          <li className="py-4 border-b-2 border-[#f9f0ff] relative bg-white">
            <div className="flex items-center justify-between gap-5">
              <h2
                className="font-bold text-[#2f1533] text-lg cursor-pointer hover:text-[#AD28EB]"
                onClick={() => {
                  if (isExpanded == 2) {
                    expandIndex(!isExpanded);
                  } else {
                    expandIndex(2);
                  }
                }}
              >
                Is Frontend Mentor free?
              </h2>
              <img
                src={isExpanded === 2 ? minusIcon : plusIcon}
                alt="Plus Icon"
              />
            </div>
            <p
              className={
                isExpanded == 2
                  ? "text-[#8c6991] py-4 h-auto duration-200 ease-in-out"
                  : "h-0 opacity-0 duration-200 overflow-hidden"
              }
            >
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS and JavaScript, it's suitable for all levels and ideal
              for portfolio building.
            </p>
          </li>
          <li className="py-4 border-b-2 border-[#f9f0ff] relative bg-white">
            <div className="flex items-center justify-between gap-5">
              <h2
                className="font-bold text-[#2f1533] text-lg cursor-pointer hover:text-[#AD28EB]"
                onClick={() => {
                  if (isExpanded == 3) {
                    expandIndex(!isExpanded);
                  } else {
                    expandIndex(3);
                  }
                }}
              >
                Can i use Frontend Mentor projects in my portfolio?
              </h2>
              <img
                src={isExpanded === 3 ? minusIcon : plusIcon}
                alt="Plus Icon"
              />
            </div>
            <p
              className={
                isExpanded == 3
                  ? "text-[#8c6991] py-4 h-auto duration-200 ease-in-out"
                  : "h-0 opacity-0 duration-200 overflow-hidden"
              }
            >
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS and JavaScript, it's suitable for all levels and ideal
              for portfolio building.
            </p>
          </li>
          <li className="pt-4 relative bg-white">
            <div className="flex items-center justify-between gap-5">
              <h2
                className="font-bold text-[#2f1533] text-lg cursor-pointer hover:text-[#AD28EB]"
                onClick={() => {
                  if (isExpanded == 4) {
                    expandIndex(!isExpanded);
                  } else {
                    expandIndex(4);
                  }
                }}
              >
                How can i get help if i'm stuck on a challenge?
              </h2>
              <img
                src={isExpanded === 4 ? minusIcon : plusIcon}
                alt="Plus Icon"
              />
            </div>
            <p
              className={
                isExpanded == 4
                  ? "text-[#8c6991] py-4 h-auto duration-200 ease-in-out"
                  : "h-0 opacity-0 duration-200 overflow-hidden"
              }
            >
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS and JavaScript, it's suitable for all levels and ideal
              for portfolio building.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Faq;
