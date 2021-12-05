import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from "./hooks/useAuthContext";
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from "./pages/Profile";
import Footer from "./components/Footer/Footer";


function App() {
  
  const { user, authIsReady } = useAuthContext()
  return (
    <>
  {authIsReady && (
     <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/about" element={<About />}/>
         <Route path="/profile" element={<Profile />}/> 
         <Route path="/signin" element={user ? <Navigate replace to="/"/> : <Signin/> }/>
         <Route path="/signup" element={user ? <Navigate replace to="/profile"/> : <Signup/>}/>
       </Routes>
       </BrowserRouter>
       )}
    <Footer />
    </>
  );
}

export default App;