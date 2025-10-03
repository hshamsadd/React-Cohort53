import useWindowSize from "./useWindowSize";
import "./App.css";

export default function App() {
  const small = useWindowSize("Small check");
  const medium = useWindowSize("Medium check");
  const big = useWindowSize("Big check");

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Screen size</h1>
      <p>
        Small: {small.width} x {small.height}
      </p>
      <p>
        Medium: {medium.width} x {medium.height}
      </p>
      <p>
        Big: {big.width} x {big.height}
      </p>
    </div>
  );
}
