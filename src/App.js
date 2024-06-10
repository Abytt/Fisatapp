import logo from './logo.svg';
import './App.css';
import Addstudents from './components/Addstudents';
import Searchstud from './components/Searchstud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewall from './components/Viewall';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Addstudents/>}/>
    <Route path='/Search' element={<Searchstud/>}/>
    <Route path='/View' element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
