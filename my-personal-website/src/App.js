import React, { useState } from 'react';
import Header from './components/Header';
import Resume from './components/Resume';
import Projects from './components/Projects';
import WorkHistory from './components/WorkHistory';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import GitHubBlog from './components/GitHubBlog';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('resume');

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
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
