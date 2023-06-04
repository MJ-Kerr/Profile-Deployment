import { Html, useProgress } from "@react-three/drei"
// import { ScatterBoxLoader } from "react-awesome-loaders";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <p style={{ fontSize: 24, color: "#2AB6C1", fontweight: 800, marginTop: 40 }}>
          {progress.toFixed(2)}<span className="text-[#db15ba]">%</span>
        </p>
      </span>
    </Html>
  )
}

export default Loader