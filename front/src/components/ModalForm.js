import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {addEvent} from '../actions';

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
          className="input"
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
          className="input"
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
          className="input"
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
          className="input"
        />
      </div>
    );
  }
}

export default connect()(ModalForm);
