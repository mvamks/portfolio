import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

import Header from "./components/Header/header";
import Home from "./Pages/Home/home";
import Footer from "./components/Footer/footer";

const Aboutme = React.lazy(() => import ("./Pages/About/aboutme"));
const Project = React.lazy(() => import  ("./Pages/Project/project"));
const Contacts = React.lazy(() => import  ("./Pages/Contacts/contacts"));


const App = () => {
  return (
    <div className="App">
      <Header/> 
      <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route 
              path='/aboutme' 
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <Aboutme/>
                </Suspense>
              }
            />
            <Route 
              path='/project' 
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <Project/>
                </Suspense>
              }
            />
            <Route 
              path='/contacts' 
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <Contacts/>
                </Suspense>
              }
            />
          </Routes>
      </main>
      <Footer/>    
    </div>
  )
}

export default App;
