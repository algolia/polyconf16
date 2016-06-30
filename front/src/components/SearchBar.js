import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {searchEvents} from '../actions';

class SearchBar extends React.Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired
    };
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    //TODO
  }

  render() {
    return (
      <input
        className="input is-medium"
        type="text"
        placeholder="Search for events..."
        onChange={this.onChange}
      />
    );
  }
}

export default connect()(SearchBar);
