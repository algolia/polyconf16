import React, { Component } from 'react'
import EventRow from './EventRow'

export default class extends Component {
    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Tags</td>
                        <td>Start</td>
                        <td>End</td>
                        <td>Participants</td>
                    </tr>
                </thead>
                <tbody>
                {this.props.events.map((e, i) => (
                    <EventRow key={i} {...e} />
                ))}
                </tbody>
            </table>
        )
    }
}
