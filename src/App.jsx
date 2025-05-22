import "./App.css";
import BentoGrid from "./components/BentoGrid";
import bgImage from "./assets/background.jpg";

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen relative">
      <div
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="relative z-10">
        <BentoGrid />
      </div>
    </div>
  );
}

export default App;
