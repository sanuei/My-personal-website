import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import WorkHistory from './components/WorkHistory';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import GitHubBlog from './components/GitHubBlog';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      {currentPage !== 'home' && <Header setCurrentPage={setCurrentPage} />}
      {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === 'resume' && <Resume />}
      {currentPage === 'projects' && <Projects />}
      {currentPage === 'workHistory' && <WorkHistory />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'github' && <GitHubBlog />}
      <SocialMedia />
    </div>
  );
}

export default App;
