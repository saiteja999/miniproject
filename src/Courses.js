import React from 'react';
import Accordion from './Accordion';

import './Login.css';
const Applicant = () => {
  const data = [
    {
      title: 'Latest Technology',
      content: [
        'Artificial Intelligence',
        'Machine Learning',
        'Internet of Things',
        'Datascience',
        'Blockchain',
      ],
    },
    {
      title: 'Business',
      content: [
        "Business and how it's done",
        'Become a businessman',
        'The Secret behind the Success revealed',
      ],
    },
    {
      title: 'Arts and Travel',
      content: [
        'Arts and Crafts',
        'Learn how to blog',
        'Become the next Michelangelo',
      ],
    },
  ];
  return (
    <div className="sai">
      <div className="sidebar">
        <h3 className="text-muted">Courses Content</h3>
        {data.map((d) => {
          return <Accordion title={d.title} content={d.content} />;
        })}
      </div>
      <img src="/courses.png" alt="" />
    </div>
  );
};

export default Applicant;
