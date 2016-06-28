import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {MultiSelect} from 'react-selectize';
import {
  changeAddVenueForm
} from '../actions';


const emojis = [
  {
    label: 'pizza 🍕',
    value: '🍕'
  }
];

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
    this.filterEmojis = this.filterEmojis.bind(this);
  }

  handleChange(e) {
    const [name, value] = [
      e.target.getAttribute('name'),
      e.target.value
    ];

    this.dispatch(changeAddVenueForm(name, value));
  }

  filterEmojis(options, values, search) {
    return (search)
      ? options.filter(x => x.label)
      : options;
  }

  render() {
    return (
      <div>
        <label
          className="label"
          htmlFor="f-name"
        >
            Name
        </label>
        <input
          type="text"
          id="f-name"
          name="name"
          className="input"
          onChange={this.handleChange}
        />
        <label
          className="label"
          htmlFor="f-tags"
        >
          Tags
        </label>
        <MultiSelect
          open
          placeholder="Select tags"
          maxValues="5"
          filterOptions={this.filterEmojis}
          onValueChange={this.handleChange}
        >
          <option value="🍕">Pizza 🍕</option>
          <option value="🍔">Hamburger 🍔</option>
          <option value="🍟">Fries 🍟</option>
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
