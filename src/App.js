import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './Components/Home';
import AboutUS from './Components/AboutUS';
import Blog from './Components/Blog';
import ContactUs from './Components/ContactUs';
function App() {
  return (
    <div className="App">
      
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<AboutUS/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='contactUs' element={<ContactUs/>}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
