import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React, { Suspense } from "react";


import Header from "./components/Header/header";
import Home from "./Pages/Home/home";
import Footer from "./components/Footer/footer";
import Spinner from "./components/Spinner/spinner";

const Aboutme = React.lazy(() => import ("./Pages/About/aboutme"));
const Project = React.lazy(() => import  ("./Pages/Project/project"));
const Contacts = React.lazy(() => import  ("./Pages/Contacts/contacts"));


const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[]);

  return (
    <div className="App">
      <Header/> 
      <main className="main">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route 
              path='/aboutme' 
              element={
                <Suspense fallback={<Spinner/>}>
                  <Aboutme isMobile={isMobile}/>
                </Suspense>
              }
            />
            <Route 
              path='/project' 
              element={
                <Suspense fallback={<Spinner/>}>
                  <Project/>
                </Suspense>
              }
            />
            <Route 
              path='/contacts' 
              element={
                <Suspense fallback={<Spinner/>}>
                  <Contacts isMobile={isMobile}/>
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
