// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import Layout from './Layout';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import NoPage from './NoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <h1> This is about routing (one page to another page) </h1>;
      {/* <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path="/" element={<Layout />} /> */}
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="NoPage" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App