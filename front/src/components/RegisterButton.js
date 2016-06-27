import React, {PropTypes} from 'react';

class RegisterButton extends React.Component {
  static propTypes() {
    return {
      handleRegisterClick: PropTypes.func.isRequired,
      handleUnregisterClick: PropTypes.func.isRequired,
      registered: PropTypes.bool
    };
  }

  render() {
    if (this.props.registered) {
      return (
        <button
          onClick={this.props.handleUnregisterClick}
          className="button is-danger is-outlined"
        >
          Won't go!
        </button>
      );
    }

    return (
      <button
        onClick={this.props.handleRegisterClick}
        className="button is-success is-outlined"
      >
        Count me in!
      </button>
    );
  }
}

export default RegisterButton;
