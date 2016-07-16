import React from 'react';
import TeamScore from './TeamScore';
import {connect} from 'react-redux';
import {
  editMatch, saveMatch
} from '../../redux/actions/action-creators';

class MatchEntry extends React.Component {
  constructor(props) {
    super(props);
    this.onEditClick = this.onEditClick.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  onEditClick() {
    const { index, editMatch } = this.props;
    editMatch(index);
  }

  onSaveClick() {
    const { index, saveMatch } = this.props;
    console.log("supposed to save");
    saveMatch(index);
  }

  render() {
    const {match} = this.props;
    return (
      <tr>
        <th>{match.matchNumber}</th>
        <th>{match.status}</th>
        {
          Object.keys(match.teamScores).map((teamKey, index) =>
            <TeamScore
              key={index}
              index={index}
              matchStatus={match.matchStatus}
              teamKey={teamKey}
              teamScores={match.teamScores} />
          )
        }
        <th>
          <button onClick={this.onEditClick}>Edit Match</button>
          <button onClick={this.onSaveClick}>Save Match</button>
        </th>
      </tr>
    );
  }
}

export default connect(null, {
  editMatch, saveMatch
})(MatchEntry);
