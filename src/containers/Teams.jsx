import React from 'react';
import SearchBar from '../components/teams/SearchBar';
import TeamResults from '../components/teams/TeamResults';
import TeamDisplay from '../components/teams/TeamDisplay';
import { connect } from 'react-redux';

function Teams ({
  matches,
  ranking,
  filterText,
  display
}) {
  return (
    <div>
      <span>Teams Page</span>
      <SearchBar filterText={filterText}/>
      <TeamResults filterText={filterText} ranking={ranking} matches={matches}/>
      <TeamDisplay display={display}/>
    </div>
  );
}

export default connect(
    (state) => ({
      matches: state.matches,
      ranking: state.ranking,
      filterText: state.filterText,
      display: state.display
    }),
    null
)(Teams);
