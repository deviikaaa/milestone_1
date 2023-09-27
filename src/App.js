
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MyRecipe from './components/Myrecipe';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/myrecipe" component={MyRecipe} />
        <Route path="/aboutus" component={AboutUs} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
