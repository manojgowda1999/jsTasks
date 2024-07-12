import React from 'react';

const ArticleList = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
