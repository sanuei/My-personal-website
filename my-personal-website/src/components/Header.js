import React from 'react';
import './Header.css';

function Header({ setCurrentPage }) {
  return (
    <header className="site-header">
      <h1>Sonic_yann</h1>
      <nav>
        <ul>
          <li><button className="nav-button" onClick={() => setCurrentPage('resume')}>履歴書</button></li>
          <li><button className="nav-button" onClick={() => setCurrentPage('projects')}>プロジェクト経験</button></li>
          <li><button className="nav-button" onClick={() => setCurrentPage('workHistory')}>職務経歴</button></li>
          <li><button className="nav-button" onClick={() => setCurrentPage('contact')}>お問い合わせ</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;