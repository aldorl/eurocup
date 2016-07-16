import React from 'react';
import {connect} from 'react-redux';
import {
  updateFilter
} from '../../redux/actions/action-creators';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
		const { filterText, updateFilter } = this.props;
    updateFilter(event.target.value);
  }

  render() {
		const { filterText } = this.props;
    return (
			<div className="row">
				<div className="twelve columns">
					<input
						type="text"
						className="u-full-width"
						placeholder="Search teams by name..."
						style={({
							marginBottom: '0.5em'
						})}
						value={filterText}
						onChange={this.onChange}
						/>
				</div>
			</div>
    );
  }
}

export default connect(null, {
  updateFilter
})(SearchBar);
