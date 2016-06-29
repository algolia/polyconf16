import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {
  SimpleSelect,
  MultiSelect
} from 'react-selectize';

import {
  changeAddVenueForm,
  searchPoznanVenues
} from '../actions';


const foodTags = require('json!../data/emojis.json');

function EmojiOption({label, value}) {
  return (
    <div className="simple-option">
      <span>{value}</span>
      <span style={{marginLeft: 10}}>{label}</span>
    </div>
  );
}

function EmojiValue({label, value}) {
  return (
    <div>
      <span style={{marginRight: 15}}>{value}</span>
    </div>
  );
}

function VenueValue({value}) {
  return (
    <span>{value}</span>
  );
}

function formatVenues(values) {
  return values.map(x => ({
    label: (x.address)
      ? `${x.name}, ${x.address}`
      : x.name,
    value: x.name,
    address: x.address
  }));
}

class ModalForm extends React.Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
      onClose: PropTypes.func,
      poznanVenues: PropTypes.array
    };
  }

  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.handleChange = this.handleChange.bind(this);
    this.handleVenuesChange = this.handleVenuesChange.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.searchVenues = this.searchVenues.bind(this);
  }

  handleChange(e) {
    const [name, value] = [
      e.target.getAttribute('name'),
      e.target.value
    ];

    this.dispatch(changeAddVenueForm(name, value));
  }

  handleVenuesChange(item) {
    if (item) {
      console.log('ITEM:', item);
      this.dispatch(changeAddVenueForm('name', item.value));
      this.dispatch(changeAddVenueForm('address', item.address));
    }
  }

  handleTagsChange(values) {
    this.dispatch(changeAddVenueForm('tags', values));
  }

  searchVenues(search) {
    this.dispatch(searchPoznanVenues(search));
  }

  render() {
    const {poznanVenues} = this.props;

    return (
      <div>
        <label
          className="label"
          htmlFor="f-name"
        >
            Venue Name
        </label>

        <SimpleSelect
          placeholder="Search for a venue"
          name="name"
          options={formatVenues(poznanVenues)}
          onValueChange={this.handleVenuesChange}
          filterOptions={(options) => options}
          onSearchChange={this.searchVenues}
          renderValue={VenueValue}
          renderNoResultsFound={() => null}
        />
        <label
          className="label"
          htmlFor="f-tags"
        >
          Tags
        </label>
        <MultiSelect
          placeholder="Select tags"
          maxValues="5"
          name="tags"
          onValuesChange={this.handleTagsChange}
          renderOption={EmojiOption}
          renderValue={EmojiValue}
        >
          {foodTags.map((food, index) => (
            <option key={index} value={food.char}>
              {food.name}
            </option>
          ))}
        </MultiSelect>

        <label
          className="label"
          htmlFor="f-start"
        >
          Start
        </label>
        <input
          type="text"
          id="f-start"
          name="start"
          className="input"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect(
  ({poznanVenues}) => ({poznanVenues: poznanVenues.results})
)(ModalForm);
