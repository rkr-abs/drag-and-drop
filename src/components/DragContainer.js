import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";


const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const DragContainer = ({children}) => {
  const backend = isMobile ? TouchBackend : HTML5Backend;

  return (
    <DndProvider backend={backend}>
        {children}
    </DndProvider>
  );
};

export default DragContainer;
