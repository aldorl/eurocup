import React from 'react';
import MatchEntry from '../components/matches/MatchEntry';
import { connect } from 'react-redux';

function Matches ({
  matches
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Game #</th>
          <th>Status</th>
          <th>Away</th>
          <th>Home</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{matches.map((match, index) =>
        <MatchEntry match={match} key={index} index={index}/>
      )}</tbody>
    </table>
  );
}

export default connect(
    (state) => ({
      matches: state.matches
    }),
    null
)(Matches);
