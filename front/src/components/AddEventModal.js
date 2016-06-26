import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ModalForm from './ModalForm';

class AddEventModal extends React.Component {

  static propTypes() {
    return {
      showModal: PropTypes.boolean.isRequired,
      onClose: PropTypes.function.isRequired
    };
  }

  render() {
    const {showModal, onClose} = this.props;

    if (!showModal) return null;

    return (
      <div>
        <div
          style={{display: 'flex'}}
          className="modal"
        >
          <div
            className="modal-background"
            onClick={this.props.onClose}
          />
          <div className="modal-card">
            <div className="modal-card-head">
              <p className="modal-card-title">Insert a new Venue</p>
              <button
                className="delete"
                onClick={this.props.onClose}
              />
            </div>
            <div className="modal-card-body">
              <ModalForm onClose={onClose} />
            </div>
            <div className="modal-card-foot">
              <button
                type="submit"
                className="button is-success"
                data-dismiss="modal" onClick={() =>{}}
              >
                Add
              </button>
              <button
                className="button"
                data-dismiss="modal"
                onClick={this.props.onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({showModal: state.addEventModal.visible})
)(AddEventModal);
