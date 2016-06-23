import React, { Component, PropTypes } from 'react'

export default class extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.tags.join(' ')}</td>
                <td>{this.props.start}</td>
                <td>{this.props.end}</td>
                <td>{this.props.people.length}</td>
            </tr>
        )
    }

    static get propTypes() {
        return {
            end: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            people: PropTypes.arrayOf(PropTypes.string).isRequired,
            start: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        }
    }
}
