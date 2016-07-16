import React from 'react';
import { connect } from 'react-redux';
import { resetTeams } from '../../redux/actions/action-creators';

class LeaderRow extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { teamKey, resetTeams } = this.props;
        resetTeams(teamKey);
    }

    render() {
        const { team } = this.props;
        return (
            <tr>
                <td>{team.name}</td>
                <td>{team.wins}</td>
                <td>{team.loses}</td>
                <td>{team.draws}</td>
                <td>{team.points}</td>
                <td><button onClick={this.onClick}>Test action</button></td>
            </tr>
        );
    }
}

export default connect (null, {resetTeams})(LeaderRow);
