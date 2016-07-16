import React from 'react';
import TeamLogo from './TeamLogo';
import MatchEntry from '../matches/MatchEntry';

class TeamDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
		const { display, teams } = this.props;
    const teamLogo = (
      <TeamLogo team={teams[display.selection]}/>
    );
    return (
			<div className="row">

        {display.selection === '' ? null : teamLogo}
        <h4>History of matches</h4>
        <table style={style.table}>
          <thead>
            <tr>
              <th>Game #</th>
              <th>Status</th>
              <th>Away</th>
              <th>Home</th>
            </tr>
          </thead>
          <tbody>{display.matches.map((match, index) => (
            <MatchEntry match={match} key={index} index={index} actions='false'/>
          ))}</tbody>
        </table>

			</div>
    );
  }
}

const style = {
  table: {
    margin: '0 auto'
  }
}

export default TeamDisplay;
