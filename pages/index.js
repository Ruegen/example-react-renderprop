import Mouse from "../components/Mouse"

export default () => {
  const styles = {
    width: "100vw",
    height: "100vh",
    background: "lightblue"
  }
  return (
    <Mouse>
      {mouse => (
        <div style={styles}>
          <p>Mouse x: {mouse.x}</p>
          <p>Mouse y: {mouse.y}</p>
        </div>
      )}
    </Mouse>
  )
}
