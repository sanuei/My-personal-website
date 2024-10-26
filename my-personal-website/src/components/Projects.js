import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects">
      <h2>プロジェクト経験</h2>
      <div className="projects-content">
        <div className="project">
          <h3>プロジェクト1</h3>
          <p><strong>期間：</strong>2020年4月 - 2020年9月</p>
          <p><strong>概要：</strong>ここにプロジェクトの概要を記述します。</p>
          <p><strong>役割：</strong>ここであなたの役割を記述します。</p>
          <p><strong>使用技術：</strong>React, Node.js, MongoDB</p>
        </div>
        <div className="project">
          <h3>プロジェクト2</h3>
          <p><strong>期間：</strong>2019年10月 - 2020年3月</p>
          <p><strong>概要：</strong>ここにプロジェクトの概要を記述します。</p>
          <p><strong>役割：</strong>ここであなたの役割を記述します。</p>
          <p><strong>使用技術：</strong>Vue.js, Python, PostgreSQL</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;