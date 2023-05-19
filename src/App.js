import './App.css';
import {Route, Routes} from "react-router-dom";
import React from "react";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import LayOut from "./components/LayOut/LayOut";
import SendPosts from "./components/SendPosts/SendPosts";

function App() {
  return (
    <>
     <Routes>
         <Route path='/' element={<LayOut/>}>
             <Route index element={<MainPage/>}/>
             <Route path='/about' element={<AboutPage/>}/>
         </Route>
         <Route path='/posts' element={<PostsPage/>}/>
         <Route path='/sendPosts' element={<SendPosts/>}/>
     </Routes>
    </>
  );
}

export default App;
