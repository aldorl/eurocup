import React from 'react';
import LeaderRow from '../components/leaderboard/LeaderRow';
import { connect } from 'react-redux';

function Leaderboard ({
  teams,
  ranking
}) {
  return (
    <div>
      The teams are the following

      <table style={style.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Wins</th>
            <th>Loses</th>
            <th>Draws</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {ranking.sort((a, b) => b.points - a.points).map((item, index) => (
            <LeaderRow team={teams[item.team]} key={index} teamKey={item.team}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const style = {
  table: {
    margin: '0 auto'
  }
}

export default connect(
  (state) => ({
    teams: state.teams,
    ranking: state.ranking
  }),
  null
)(Leaderboard);
