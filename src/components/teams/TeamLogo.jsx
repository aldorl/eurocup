import React from 'react';

class TeamLogo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
		const { team } = this.props;

    return (
      <img
        src={team.logo}
        alt="logo"
        className="img-responsive"
      />
    );
  }
}

export default TeamLogo;
