import React, {PropTypes} from 'react';
import SearchBar from './SearchBar';
import AddEventModal from './AddEventModal';
import {connect} from 'react-redux';
import Nav from './Nav';
import SearchableEvents from './SearchableEvents';
import {toggleModal} from '../actions';

class App extends React.Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired
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
        <div className="hero header">
          <div className="hero-head">
            <div className="container">
              <Nav />
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-10">
                <SearchBar />
              </div>
              <div className="column">
                <button
                  className="button is-danger is is-medium is-outlined is-fullwidth"
                  onClick={this.handleButtonClick}
                >
                  <span className="icon">
                    <i className="fa fa-plus-circle" />
                  </span>
                  <span>Add Venue</span>
                </button>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <SearchableEvents />
              </div>
            </div>
            <AddEventModal
              onClose={this.handleCloseModal}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default connect()(App);
