import React from 'react';
import {connect} from 'react-redux';
import {
  updateDisplay
} from '../../redux/actions/action-creators';

class TeamSelectButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {teamKey, updateDisplay, matches} = this.props;

    let selectedMatches = [];
    matches.map((match) => {
      Object.keys(match.teamScores).map((matchTeamKey, localIndex) => {
        if (matchTeamKey === teamKey) {
          selectedMatches.push(match);
        }
      });
    });

    updateDisplay(teamKey, selectedMatches);
  }

  render() {
    const {teamKey} = this.props;
		return (
			<button onClick={this.onClick}>
        {teamKey}
			</button>
    );
  }
}

export default TeamSelectButton;
export default connect(null, {
  updateDisplay
})(TeamSelectButton);
