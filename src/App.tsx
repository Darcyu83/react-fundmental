import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import CheckBoxControl from './components/checkbox_control/CheckBoxControl';
import Counter from './components/counter_reducer/Counter';
import CssHome from './components/css_study/CssHome';
import Input_useInputsHook from './components/input_control/Input_useInputsHook';
import RegistUserForm from './components/input_control/RegistUserForm';
import ReduxHome from './components/redux/ReduxHome';
import Snippet from './components/Snippet';
import A_TodoHome from './components/todo_context/A_TodoHome';
import UpperMostMenu from './components/UpperMostMenu';
import UserList from './components/userInfo/UserList';
import UserListReducer from './components/userInfo_reducer/UserList';
import './modules/reset.module.css';

function App() {
  //router v6
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <UpperMostMenu />
      <Routes>
        <Route path="/" element={<Snippet />} />
        <Route path="/inputs" element={<RegistUserForm />} />
        <Route path="/useinputs" element={<Input_useInputsHook />} />
        <Route path="/userlist" element={<UserList />} />
        ss
        <Route path="/userlistreducer" element={<UserListReducer />} />
        <Route path="/checkbox" element={<CheckBoxControl />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todolist" element={<A_TodoHome />} />
        <Route path="/css" element={<CssHome />} />
        <Route path="/redux" element={<ReduxHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
