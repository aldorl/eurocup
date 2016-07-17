import React from 'react';
import { connect } from 'react-redux';

class LeaderRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { team } = this.props;
    return (
      <tr>
        <td>{team.name}</td>
        <td>{team.wins}</td>
        <td>{team.losses}</td>
        <td>{team.draws}</td>
        <td>{team.points}</td>
      </tr>
    );
  }
}

export default LeaderRow;
