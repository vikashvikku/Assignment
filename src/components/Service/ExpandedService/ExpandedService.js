import React, { useState } from "react";
import "./ExpandedService.css";
import service from "../serviceData";

const ExpandedService = () => {
  const [expanded, setExpanded] = useState(false);
  // const [expanding, setExpanding] = useState(false);

  // const handleClick = () => {
  //   setExpanded(!expanded);
  //   console.log("Clicked", service.type);
  //   // setExpanding(!expanding);
  // };

  // const handleOutsideClick = () => {
  //   setExpanded(false);
  // };

  return (
    <div className="expanded-container">
      <div className="expanded-items">
        {service.map((item) => {
          const { id, name, type } = item;

          const handleClick = () => {
            if (id) {
              setExpanded(!expanded);
              console.log("Clicked", type, id);
            }
            // setExpanding(!expanding);
          };
          return (
            <div
              key={item.id}
              className={
                type === expanded ? expanded && "expanding" : "expanded"
              }
              onClick={handleClick}
            >
              Hello
            </div>
          );
        })}

        {/* <div
          className={expanded ? "expanding" : "expanded"}
          onClick={handleClick}
        >
          Hello
        </div>
        <div
          className={expanded ? "expanded" : "expanding"}
          onClick={handleClick}
        >
          Hello
        </div>
        <div className="expanding">Hello</div>
        <div className="expanding">Hello</div> */}
      </div>
    </div>
  );
};

export default ExpandedService;
