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
          className="modal modal-open fade in"
          role="dialog"
          aria-labelledby="AddEventModal"
          style={{display: 'block'}}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={onClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title">New Event</h4>
              </div>
              <ModalForm />
            </div>
          </div>
        </div>
        <div className="modal-backdrop in"></div>
      </div>
    );
  }
}

export default connect(
  (state) => ({showModal: state.addEventModal.visible})
)(AddEventModal);
