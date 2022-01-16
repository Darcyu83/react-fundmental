import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import CheckBoxControl from "./components/checkbox_control/CheckBoxControl";
import RegistUserForm from "./components/input_control/RegistUserForm";
import PracticeComp from "./components/PracticeComp";
import UpperMostMenu from "./components/UpperMostMenu";
import UserList from "./components/userInfo/UserList";
import "./modules/reset.module.css";

function App() {
  //router v6
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <UpperMostMenu />
      <Routes>
        <Route path="/" element={<PracticeComp />} />
        <Route path="/inputs" element={<RegistUserForm />} />
        <Route path="/renderarr" element={<UserList />} />
        <Route path="/checkbox" element={<CheckBoxControl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
