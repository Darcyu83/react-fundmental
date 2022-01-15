import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Inputs from "./components/Inputs";
import PracticeComp from "./components/PracticeComp";
import RenderArray from "./components/RenderArray";
import UpperMostMenu from "./components/UpperMostMenu";
import "./modules/reset.module.css";

function App() {
  //router v6
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <UpperMostMenu />
      <Routes>
        <Route path="/" element={<PracticeComp />} />
        <Route path="/inputs" element={<Inputs />} />
        <Route path="/renderarr" element={<RenderArray />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
