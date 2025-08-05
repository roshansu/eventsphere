import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import Event from "./Component/Event";
import About from "./Component/About";
import Eventdetails from "./Component/Eventdetails";
import Host from "./Component/Host";
import Profile from "./Component/Profile";
import Project from './Component/Project';
import Signup from './Component/Signup';
import Login from './Component/Login';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/event" element={<Event challenges={false}/>}/>
                <Route path="/challenges" element={<Event challenges={true}/>}/>
                <Route path="/event/details/:id" element={<Eventdetails challenges={false}/>}/>
                <Route path="/challenges/details/:id" element={<Eventdetails challenges={true}/>}/>
                <Route path="/host/event" element={<Host isEvent={true}/>}/>
                <Route path="/host/challenges" element={<Host isEvent={false}/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/projects" element={<Project/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
            <About/>
        </BrowserRouter>
  </StrictMode>,
)
