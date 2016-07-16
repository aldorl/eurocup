import React from 'react';
import {connect} from 'react-redux';
import {
  incrementScore, decrementScore
} from '../../redux/actions/action-creators';

class MatchEntry extends React.Component {
  constructor(props) {
    super(props);
    this.onIncrementClick = this.onIncrementClick.bind(this);
    this.onDecrementClick = this.onDecrementClick.bind(this);
  }

  onIncrementClick() {
    const { index, incrementScore, teamKey } = this.props;
    incrementScore(index, teamKey);
  }

  onDecrementClick() {
    const { index, decrementScore, teamKey } = this.props;
    decrementScore(index, teamKey);
  }

  render() {
    const { index, matchStatus, teamKey, teamScores} = this.props;
    const incrementButton = (<li>
      <button onClick={this.onIncrementClick}>+</button>
    </li>);
    const decrementButton = (<li>
      <button onClick={this.onDecrementClick}>+</button>
    </li>);
    return (
      <th>
        <ul>
          <li>{teamKey}</li>
          <li>
            {matchStatus == "pending" ? 'No score' : teamScores[teamKey]}
          </li>
          {matchStatus == "scoring" ? incrementButton : null}
          {matchStatus == "scoring" ? decrementButton : null}
        </ul>
      </th>
    );
  }
}

export default connect(null, {
  incrementScore, decrementScore
})(MatchEntry);
