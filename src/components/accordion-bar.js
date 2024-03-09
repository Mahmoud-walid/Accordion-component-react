import React, { useState } from "react";

const AccordionBar = (props) => {
  const isOpen = props.currentOpen === props.id;

  const openBar = () => {
    props.setCurrentOpen(isOpen ? null : props.id);
  };
  return (
    <li
      style={{ borderTopColor: isOpen ? "#689000" : "" }}
      className="accordionBar"
    >
      <div
        style={{ color: isOpen ? "#689000" : "" }}
        onClick={() => openBar()}
        className="title"
      >
        <div className="titleContent">
          <span style={{ color: isOpen ? "#689000" : "" }} className="ID">
            {props.id < 10 ? props.id.toString().padStart(2, "0") : props.id}
          </span>
          <span>{props.title}</span>
        </div>
        <span className="btn">{isOpen ? "-" : "+"}</span>
      </div>
      <div style={{ display: isOpen ? "block" : "none" }} className="text">
        {props.children}
      </div>
    </li>
  );
};

export default AccordionBar;
