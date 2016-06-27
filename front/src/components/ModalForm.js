import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {
  changeAddVenueForm
} from '../actions';

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
  }

  handleChange(e) {
    const [name, value] = [
      e.target.getAttribute('name'),
      e.target.value
    ];

    this.dispatch(changeAddVenueForm(name, value));
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
        <input
          type="text"
          id="f-tags"
          name="tags"
          className="input"
          onChange={this.handleChange}
        />
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
