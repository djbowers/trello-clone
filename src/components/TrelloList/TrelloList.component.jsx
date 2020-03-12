import React from 'react';

import TrelloCard from '../TrelloCard';

import './TrelloList.styles.scss';

const TrelloList = () => {
  return (
    <div className="trello-list">
      <h3>My List</h3>
      <TrelloCard />
    </div>
  );
};

export default TrelloList;
