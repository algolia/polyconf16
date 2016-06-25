import React from 'react';
import SearchBar from './SearchBar';
import AddEventModal from './AddEventModal';
import SearchableEvents from './SearchableEvents';

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <button
          className="pull-right btn btn-primary"
          data-toggle="modal"
          data-target="#add-modal"
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
          Add Venue
        </button>
        <SearchableEvents />
        <AddEventModal />
      </div>
    );
  }
}

export default App;
