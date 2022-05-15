import React from 'react'

const Drag = () => {
  
const startDrag = (ev) => {
  ev.dataTransfer.setData("drag-item", props.dataItem);
}

return(
  <div draggable onDragStart={startDrag}>
    {props.children}
  </div>);
}

export default Drag