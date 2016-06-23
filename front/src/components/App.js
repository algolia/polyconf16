import React, { Component } from 'react'
import SearchableEvents from './SearchableEvents'
import SearchBar from './SearchBar'
import AddEventModal from './AddEventModal'

export default class extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <button className='pull-right btn btn-primary'
                    data-toggle='modal' data-target='#add-modal'>
                    <i className='fa fa-plus' aria-hidden='true'></i>
                </button>
                <SearchableEvents />
                <AddEventModal />
            </div>
        )
    }
}
