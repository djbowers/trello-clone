import React from 'react';
import { connect } from 'react-redux';

import TrelloList from '../TrelloList';

const App = ({ lists }) => {
  return (
    <div className="app">
      <h2>Trello Clone</h2>
      <div className="lists">
        {lists.map((list) => (
          <TrelloList title={list.title} cards={list.cards} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ lists }) => ({
  lists
});

export default connect(mapStateToProps)(App);
