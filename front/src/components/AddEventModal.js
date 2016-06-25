import React from 'react';
import ModalForm from './ModalForm';

class AddEventModal extends React.Component {
  render() {
    return (
      <div
        className="modal fade"
        id="add-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="AddEventModal"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">New Event</h4>
            </div>
            <ModalForm />
          </div>
        </div>
      </div>
    );
  }
}

export default AddEventModal;
