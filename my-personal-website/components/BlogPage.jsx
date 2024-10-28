import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const BlogList = styled.div`
  display: grid;
  gap: 20px;
`;

const BlogCard = styled.div`
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`;

const PageButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: ${props => props.active ? '#007bff' : 'white'};
  color: ${props => props.active ? 'white' : 'black'};
  cursor: pointer;
  
  &:hover {
    background: ${props => props.active ? '#007bff' : '#f0f0f0'};
  }
`;

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('获取博客文章失败:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  
  const getCurrentPosts = () => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  };

  return (
    <BlogContainer>
      <ProfileSection>
        <ProfileImage src="/path-to-your-image.jpg" alt="个人头像" />
        <h1>博主名字</h1>
        <p>个人简介：热爱技术，热爱分享</p>
      </ProfileSection>

      <BlogList>
        {getCurrentPosts().map(post => (
          <BlogCard key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <small>{post.date}</small>
          </BlogCard>
        ))}
      </BlogList>

      <Pagination>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
          <PageButton
            key={number}
            active={currentPage === number}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </PageButton>
        ))}
      </Pagination>
    </BlogContainer>
  );
};

export default BlogPage;
