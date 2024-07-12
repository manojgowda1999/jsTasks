import React, { useState } from 'react';
import SortOptions from './SortOptions';
import ArticleList from './ArticleList';

const ArticleSortingApp = () => {
  // Initial list of articles
  const [articles] = useState([
    { id: 1, title: 'React Basics', date: '2024-01-01' },
    { id: 2, title: 'Advanced JavaScript', date: '2023-12-01' },
    { id: 3, title: 'Understanding Redux', date: '2024-06-15' },
  ]);

  // State to manage the sorting criteria
  const [sortCriteria, setSortCriteria] = useState('title');

  // Callback function to update the sorting criteria
  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
  };

  // Function to sort the articles based on the selected criteria
  const sortedArticles = [...articles].sort((a, b) => {
    if (sortCriteria === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortCriteria === 'date') {
      return new Date(a.date) - new Date(b.date);
    }
    return 0;
  });

  return (
    <div>
      <h1>Article Sorting Application</h1>
      <SortOptions onSortChange={handleSortChange} />
      <ArticleList articles={sortedArticles} />
    </div>
  );
};

export default ArticleSortingApp;
