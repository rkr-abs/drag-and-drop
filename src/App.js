import React from "react";
import DragContainer from "./components/DragContainer";
import Drop from "./components/Drop";
import Drag from "./components/Drag";
import './App.css';
import OfflineAlert from "./components/OfflineAlert";

const colors = [
  { color: "red", image: "/naruto.png" },
  { color: "blue", image: "/sasuke.png" },
];
const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const dragStyle = {
  width: "100px",
  height: "100px",
  backgroundSize: "cover",
  // border: "1px solid red",
  margin: 20,
};

const Draggable = () =>
  colors.map(({ color, image }, i) => (
    <Drag key={i} type="Left">
      <div style={{ ...dragStyle, backgroundImage: `url(${image})` }}>
        Drag Me 
      </div>
    </Drag>
  ));

const App = () => {
  return (
    <DragContainer>
      <div style={flex}>
        <div style={{ marginRight: "20px" }}>
          <h1>Container</h1>
          <Drop style={flex} acceptType="Left" draggable={true} dragType="Right">
            Drop Here
          </Drop>
        </div>
        <div>
          <h1>Draggable</h1>
          <Drop style={flex} acceptType="Right">
            <Draggable />
          </Drop>
        </div>
      </div>
      <OfflineAlert/>
    </DragContainer>
  );
};

export default App;
