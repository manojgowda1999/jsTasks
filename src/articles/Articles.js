import React, { useState } from 'react';
import SortOptions from './SortOptions'; // Import child component

const articles = [
  { id: 1, title: 'Article 1', date: new Date('2024-07-10') },
  { id: 2, title: 'Article 2', date: new Date('2024-07-12') },
  { id: 3, title: 'Article 3', date: new Date('2024-07-09') },
];

const Articles = () => {
  const [sortedArticles, setSortedArticles] = useState(articles);
  const [sortBy, setSortBy] = useState('date'); // Default sorting by date

  const handleSortChange = (newCriteria) => {
    setSortBy(newCriteria);

    const sorted = [...articles].sort((a, b) => {
      switch (newCriteria) {
        case 'title':
          return a.title.localeCompare(b.title); // Sort by title (alphabetical)
        case 'date':
          return b.date - a.date; // Sort by date (newest first)
        default:
          return 0;
      }
    });

    setSortedArticles(sorted);
  };

  return (
    <div>
      <SortOptions onSortChange={handleSortChange} />
      <h2>Articles</h2>
      <ul>
        {sortedArticles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>Date: {article.date.toDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
