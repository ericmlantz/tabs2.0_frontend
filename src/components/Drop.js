import React from 'react'
import React from 'react'

const Drop = () => {
  
const dragOver = (ev) => {
  ev.preventDefault();
}

const drop = (ev) => {
  const droppedItem = ev.dataTransfer.getData("drag-item");
  if (droppedItem) {
    onItemDropped(droppedItem);
  }
}

return (
  <div onDragOver={dragOver} onDrop={drop}>
    {props.children}
  </div>
  );
}

export default Drop