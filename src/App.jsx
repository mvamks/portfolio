import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Aboutme from "./Pages/About/aboutme";
import Home from "./Pages/Home/home";
import Project from "./Pages/Project/project";
import Contacts from "./Pages/Contacts/contacts";
import Footer from "./components/Footer/footer";


const App = () => {
  return (
    <div className="App">
      <Header/> 
      <main>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutme' element={<Aboutme/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
          </Routes>
      </main>
      <Footer/>    
    </div>
  )
}

export default App;
