import React from 'react';

const TextCard = ({ imgUrl, title, text }) => {
  return (
    <div className="text-card">
      <img src={imgUrl} alt={title} />
      <div className="text-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextCard;
