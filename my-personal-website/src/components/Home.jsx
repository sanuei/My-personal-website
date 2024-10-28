import React from 'react';
import './Home.css';

function Home({ setCurrentPage }) {
  const menuItems = [
    { id: 'resume', text: '履歴書', description: '経歴、学歴、資格などの詳細情報' },
    { id: 'projects', text: 'プロジェクト経験', description: '参加したプロジェクトの詳細と成果' },
    { id: 'workHistory', text: '職務経歴', description: 'これまでの職務経験と実績' },
    { id: 'github', text: 'GitHub', description: '開発プロジェクトとコード例の紹介' },
    { id: 'contact', text: 'お問い合わせ', description: 'ご連絡・お問い合わせはこちら' }
  ];

  return (
    <div className="home-container">
      <div className="name-title">
        <div className="name-container">
          <div className="name-hover-container">
            <span className="name-kana">ヤン サンウエイ</span>
            <h1>楊 尚衛</h1>
          </div>
        </div>
        <p className="job-title">ウェブ開発者</p>
      </div>

      <div className="menu-grid">
        {menuItems.map(item => (
          <button
            key={item.id}
            className="menu-item"
            onClick={() => setCurrentPage(item.id)}
          >
            <h2>{item.text}</h2>
            <p>{item.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
