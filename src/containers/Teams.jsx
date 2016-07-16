import React from 'react';
import SearchBar from '../components/teams/SearchBar';
import TeamResults from '../components/teams/TeamResults';
import TeamDisplay from '../components/teams/TeamDisplay';
import { connect } from 'react-redux';

function Teams ({
  teams,
  matches,
  ranking,
  filterText,
  display
}) {
  return (
    <div>
      <SearchBar filterText={filterText}/>
      <TeamResults filterText={filterText} ranking={ranking} matches={matches}/>
      { display.selection == '' ? null :
      <TeamDisplay display={display} teams={teams}/> }
    </div>
  );
}

export default connect(
    (state) => ({
      teams: state.teams,
      matches: state.matches,
      ranking: state.ranking,
      filterText: state.filterText,
      display: state.display
    }),
    null
)(Teams);
