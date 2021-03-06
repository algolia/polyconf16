import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {submitAddVenueForm} from '../actions';
import ModalForm from './ModalForm';

class AddEventModal extends React.Component {

  static propTypes() {
    return {
      showModal: PropTypes.boolean.isRequired,
      onClose: PropTypes.function.isRequired,
      dispatch: PropTypes.function.isRequired
    };
  }

  constructor(props) {
    super(props);
    this.addEvent = this.addEvent.bind(this);
  }

  addEvent() {
    this.props.dispatch(submitAddVenueForm());
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
          <div className="modal-card" style={{overflow: 'visible'}}>
            <div className="modal-card-head">
              <p className="modal-card-title">Insert a new Venue</p>
              <button
                className="delete"
                onClick={this.props.onClose}
              />
            </div>
            <div className="modal-card-body" style={{overflow: 'visible'}}>
              <ModalForm onClose={onClose} />
            </div>
            <div className="modal-card-foot">
              <button
                type="submit"
                className="button is-success"
                data-dismiss="modal" onClick={this.addEvent}
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
