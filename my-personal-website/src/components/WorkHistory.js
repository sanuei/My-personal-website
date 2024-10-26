import React from 'react';
import './WorkHistory.css';

function WorkHistory() {
  return (
    <section className="work-history">
      <h2>職務経歴</h2>
      <div className="work-history-content">
        <div className="job">
          <h3>株式会社ABC</h3>
          <p><strong>期間：</strong>2018年4月 - 現在</p>
          <p><strong>職位：</strong>シニアソフトウェアエンジニア</p>
          <p><strong>主な責任：</strong></p>
          <ul>
            <li>新機能の設計と実装</li>
            <li>ジュニアエンジニアのメンタリング</li>
            <li>パフォーマンス最適化</li>
          </ul>
        </div>
        <div className="job">
          <h3>株式会社XYZ</h3>
          <p><strong>期間：</strong>2015年4月 - 2018年3月</p>
          <p><strong>職位：</strong>ソフトウェアエンジニア</p>
          <p><strong>主な責任：</strong></p>
          <ul>
            <li>ウェブアプリケーションの開発</li>
            <li>データベース設計と管理</li>
            <li>クライアントとの技術的なコミュニケーション</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WorkHistory;