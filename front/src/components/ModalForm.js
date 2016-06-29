import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {
  SimpleSelect,
  MultiSelect
} from 'react-selectize';

import {
  changeAddVenueForm
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

class ModalForm extends React.Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
      onClose: PropTypes.func
    };
  }

  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.handleChange = this.handleChange.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
  }

  handleChange(e) {
    const [name, value] = [
      e.target.getAttribute('name'),
      e.target.value
    ];

    this.dispatch(changeAddVenueForm(name, value));
  }
  handleTagsChange(values) {
    this.dispatch(changeAddVenueForm('tags', values));
  }

  render() {
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
          className="input"
          onValueChange={this.handleChange}
        >
          <option value="McDonald">McDonald</option>
          <option value="Pizzeria da Mario">Pizzeria da Mario"</option>
          <option value="Tokyo Beaubourg - Sushi">Tokyo Beaubourg - Sushi</option>
        </SimpleSelect>
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
        <label
          className="label"
          htmlFor="f-end"
        >
            End
        </label>
        <input
          type="text"
          id="f-end"
          name="end"
          className="input"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect()(ModalForm);
