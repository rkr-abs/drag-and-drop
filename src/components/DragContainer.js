import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { Preview } from 'react-dnd-preview'

const generatePreview = ({itemType, item, style}) => {
  return <div className="item-list__item" style={style}>{Object.values(item)}</div>
}

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const DragContainer = ({children}) => {
  const backend = isMobile ? TouchBackend : HTML5Backend;

  return (
    <DndProvider backend={backend}>
        {children}
        <Preview generator={generatePreview} />
    </DndProvider>
  );
};

export default DragContainer;
