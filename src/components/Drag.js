import React, { useState } from "react";
import { useDrag } from "react-dnd";

const Drag = ({ children, type }) => {
  const [isDropped, setIsDropped] = useState(false);

  const [{ isDragging }, drag] = useDrag({
    type,
    item: { component: children },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      monitor.didDrop() && setIsDropped(true);
    },
  });

  return !isDropped ? (
    <div
      ref={drag}
      style={{
        cursor: "move",
        // opacity: isDragging ? 0.5 : 1,
      }}
    >
      {children}
    </div>
  ) : null;
};

export default Drag;
