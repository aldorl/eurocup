import React from 'react';
import MatchEntry from '../matches/MatchEntry';

class TeamDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
		const { display } = this.props;
    return (
			<div className="row">
        <h4>Selected teams</h4>
        <span>{display.selection}</span>

        <h4>History of matches</h4>
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
          <tbody>{display.matches.map((match, index) => (
            <MatchEntry match={match} key={index} index={index}/>
          ))}</tbody>
        </table>

			</div>
    );
  }
}

export default TeamDisplay;
