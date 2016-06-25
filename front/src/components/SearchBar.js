import React from 'react';
import { connect } from 'react-redux';
import { searchEvents } from '../actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search for events..."
        onChange={e => this.dispatch(searchEvents(e.target.value))}
      />
    );
  }
}

export default connect()(SearchBar);
