import React, { useState } from "react";
import AccordionBar from "./accordion-bar";
import faqs from "./data";

const AccordionList = () => {
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <ul className="accordionList">
      {faqs.map((ele, index) => {
        return (
          <AccordionBar
            currentOpen={currentOpen}
            setCurrentOpen={setCurrentOpen}
            id={index + 1}
            key={index}
            title={ele.title}
          >
            {ele.text}
          </AccordionBar>
        );
      })}
    </ul>
  );
};

export default AccordionList;
