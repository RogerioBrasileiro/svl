import logo from './logo.svg';
import './App.css';
import { FormBook } from './components/FormBook';
import { NavBar } from './components/NavBar';
import BookTable from './components/BookTable';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />

      <div className='container'>
     {/*  <FormBook />
      <BookTable /> */}
      <Routes>
      <Route path='/form' element={<FormBook/>}/>
      

      </Routes>
      </div>
    </div>
  );
}

export default App;
