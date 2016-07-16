import React from 'react';
import SearchBar from '../components/teams/SearchBar';
import { connect } from 'react-redux';

function Teams ({
  matches
}) {
  return (
    <div>
      <span>Teams Page</span>
      <SearchBar />

      <div>
        Check this for implementation: https://github.com/lewisl9029/redux-data-table
      </div>
    </div>
  );
}

export default connect(
    (state) => ({
      matches: state.matches
    }),
    null
)(Teams);
