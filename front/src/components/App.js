import React, {PropTypes} from 'react';
import SearchBar from './SearchBar';
import AddEventModal from './AddEventModal';
import {connect} from 'react-redux';
import SearchableEvents from './SearchableEvents';
import {toggleModal} from '../actions';

class App extends React.Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.function.isRequired
    };
  }

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleButtonClick() {
    this.props.dispatch(toggleModal(true));
  }

  handleCloseModal() {
    this.props.dispatch(toggleModal(false));
  }

  render() {
    return (
      <div>
        <SearchBar />
        <button
          className="pull-right btn btn-primary"
          onClick={this.handleButtonClick}
        >
          <i
            className="fa fa-plus"
            aria-hidden="true"
          />
          Add Venue
        </button>
        <SearchableEvents />
        <AddEventModal
          onClose={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default connect()(App);
