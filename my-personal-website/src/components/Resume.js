import React from 'react';
import './Resume.css'; // 确保导入 CSS 文件

function Resume() {
  return (
    <section className="resume">
      <h2>履歴書</h2>
      <div className="resume-content">
        <div className="personal-info">
          <h3>個人情報</h3>
          <p><strong>氏名：</strong>山田 太郎</p>
          <p><strong>生年月日：</strong>1990年1月1日（満33歳）</p>
          <p><strong>住所：</strong>〒100-0001 東京都千代田区千代田1-1-1</p>
          <p><strong>電話番号：</strong>090-1234-5678</p>
          <p><strong>メールアドレス：</strong>taro.yamada@example.com</p>
        </div>
        <div className="education">
          <h3>学歴</h3>
          <p>2012年3月 ○○大学 ○○学部 ○○学科 卒業</p>
          <p>2009年3月 ○○高等学校 卒業</p>
        </div>
        <div className="work-experience">
          <h3>職歴</h3>
          <p>2012年4月～現在 株式会社○○</p>
          <ul>
            <li>○○部門にて○○の業務を担当</li>
            <li>○○プロジェクトにおいて○○を達成</li>
          </ul>
        </div>
        <div className="skills">
          <h3>資格・スキル</h3>
          <ul>
            <li>TOEIC 800点</li>
            <li>日本語能力試験 N1</li>
            <li>基本情報技術者</li>
            <li>○○○検定 1級</li>
          </ul>
        </div>
        <div className="self-pr">
          <h3>自己PR</h3>
          <p>私は○○の経験を活かし、○○を得意としています。○○な環境で、○○を目指して努力していきたいと考えています。</p>
        </div>
      </div>
    </section>
  );
}

export default Resume;