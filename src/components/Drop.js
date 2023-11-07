import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Drag from "./Drag";

const defaultStyle = {
  minHeight: "200px",
  border: "1px solid #000",
  position: "relative",
};

const Drop = ({ children, style, acceptType, draggable, dragType }) => {
  const [droppedItems, setDroppedItems] = useState([]);

  const [{ isOver }, drop] = useDrop({
    accept: acceptType,
    drop: (item) => {
      setDroppedItems([...droppedItems, item.component]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        ...defaultStyle,
        backgroundColor: isOver ? "lightgreen" : "white",
        ...style,
      }}
    >
      {children}
      {droppedItems.map((item, index) =>
        draggable ? (
          <Drag key={index} type={dragType}>
            {item}
          </Drag>
        ) : (
          <div key={index}>{item}</div>
        )
      )}
    </div>
  );
};

export default Drop;
