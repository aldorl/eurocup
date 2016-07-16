import React from 'react';
import LeaderRow from '../components/leaderboard/LeaderRow';
import { connect } from 'react-redux';

function Leaderboard ({
  teams
}) {
  return (
    <div>
      The teams are the following

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Wins</th>
            <th>Loses</th>
            <th>Draws</th>
            <th>Points</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(teams).map((teamKey, index) => (
              <LeaderRow team={teams[teamKey]} key={index} teamKey={teamKey}/>
            ))
          }
        </tbody>
      </table>

    </div>
  );
}

export default connect(
  (state) => ({
    teams: state.teams
  }),
  null
)(Leaderboard);
