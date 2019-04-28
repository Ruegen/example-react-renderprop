import { useState } from "react"

const Mouse = props => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const handleMousePosition = e => {
    setMouse({
      x: e.clientX,
      y: e.clientY
    })
  }
  return <div onMouseMove={handleMousePosition}>{props.children(mouse)}</div>
}

export default Mouse
