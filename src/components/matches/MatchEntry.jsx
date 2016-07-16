import React from 'react';
import TeamScore from './TeamScore';
import {connect} from 'react-redux';
import {
  editMatch, saveMatch, addWin, addLose, addDraw, updateRanking, clearDisplay
} from '../../redux/actions/action-creators';

const WIN_POINTS = 3;
const DRAW_POINTS = 1;
const LOSE_POINTS = 0;

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
    const { index, saveMatch, addWin, addLose, addDraw, updateRanking,  clearDisplay, match } = this.props;

    let teams = [];
    Object.keys(match.teamScores).map((teamKey, localIndex) => {
      teams.push({key: teamKey, score: match.teamScores[teamKey]});
    });

    if (teams[0].score === teams[1].score) {
      addDraw(teams[0].key);
      addDraw(teams[1].key);
      updateRanking(
        teams[0].key, DRAW_POINTS, teams[1].key, DRAW_POINTS
      );
    } else if (teams[0].score > teams[1].score) {
      addWin(teams[0].key);
      addLose(teams[1].key);
      updateRanking(
        teams[0].key, WIN_POINTS, teams[1].key, LOSE_POINTS
      );
    } else {
      addWin(teams[1].key);
      addLose(teams[0].key);
      updateRanking(
        teams[1].key, WIN_POINTS, teams[0].key, LOSE_POINTS
      );
    }

    clearDisplay();
    saveMatch(index);
  }

  render() {
    const {match, index} = this.props;
    const editButton = (
      <button onClick={this.onEditClick}>Edit Match</button>
    );
    const saveButton = (
      <button onClick={this.onSaveClick}>Save Match</button>
    );
    const matchFinishedText = (
      <span>Done</span>
    );

    return (
      <tr>
        <th>{match.matchNumber}</th>
        <th>{match.status}</th>
        {
          Object.keys(match.teamScores).map((teamKey, localIndex) =>
            <TeamScore
              key={localIndex}
              index={index}
              matchStatus={match.status}
              teamKey={teamKey}
              teamScores={match.teamScores} />
          )
        }
        <th>
          {match.status == 'pending' ? editButton : null}
          {match.status == 'scoring' ? saveButton : null}
          {match.status == 'played' ? matchFinishedText : null}
        </th>
      </tr>
    );
  }
}

export default connect(null, {
  editMatch, saveMatch, addWin, addLose, addDraw, updateRanking, clearDisplay
})(MatchEntry);
