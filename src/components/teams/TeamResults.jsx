import React from 'react';
import TeamSelectButton from './TeamSelectButton';

class TeamResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
		const { filterText, ranking, updateDisplay, matches } = this.props;
    return (
			<div className="row">
        {ranking.filter(function (team) {
          return team.team.indexOf(filterText.toLowerCase()) !== -1;
        }).map((item, index) => (
          <TeamSelectButton key={index} teamKey={item.team} matches={matches}/>
        ))}
			</div>
    );
  }
}

export default TeamResults;
