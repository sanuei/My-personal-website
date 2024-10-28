import React, { useState, useEffect } from 'react';
import './GitHubBlog.css';

function GitHubBlog() {
  // 状态管理
  const [profile, setProfile] = useState(null);  // GitHub个人信息
  const [repos, setRepos] = useState([]);        // 仓库列表
  const [currentPage, setCurrentPage] = useState(1);  // 当前页码
  const [loading, setLoading] = useState(true);      // 加载状态
  const reposPerPage = 6;  // 每页显示6个仓库

  // 在组件加载时获取GitHub数据
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // 获取GitHub个人信息
        const profileResponse = await fetch('https://api.github.com/users/sanuei');
        const profileData = await profileResponse.json();
        setProfile(profileData);

        // 获取仓库列表，按更新时间排序
        const reposResponse = await fetch('https://api.github.com/users/sanuei/repos?sort=updated');
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (error) {
        console.error('获取GitHub数据失败:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  // 获取当前页面要显示的仓库
  const getCurrentRepos = () => {
    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    return repos.slice(indexOfFirstRepo, indexOfLastRepo);
  };

  // 计算总页数
  const totalPages = Math.ceil(repos.length / reposPerPage);

  // 加载状态显示
  if (loading) return <div className="loading">Loading GitHub Projects...</div>;

  return (
    <div className="blog-container">
      {/* 个人信息区域 */}
      {profile && (
        <div className="profile-section">
          <img 
            className="profile-image" 
            src={profile.avatar_url} 
            alt="GitHub Profile" 
          />
          <div className="profile-info">
            <h1>{profile.name}</h1>
            <p>{profile.bio}</p>
            <p>GitHub: 
              <a 
                href={profile.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {profile.login}
              </a>
            </p>
          </div>
        </div>
      )}

      {/* 项目列表区域 */}
      <div className="project-grid">
        {getCurrentRepos().map(repo => (
          <div key={repo.id} className="project-card">
            <div className="project-card-content">
              <h3>{repo.name}</h3>
              <p>{repo.description || 'No description available'}</p>
              <p>Language: {repo.language}</p>
              <p className="stars-count">Stars: {repo.stargazers_count}</p>
            </div>
            <a 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              プロジェクトを見る
            </a>
          </div>
        ))}
      </div>

      {/* 分页控制区域 */}
      <div className="pagination-container">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
          <button
            key={number}
            className={`page-button ${currentPage === number ? 'active' : ''}`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GitHubBlog;
