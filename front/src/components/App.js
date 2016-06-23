import React, { Component } from 'react'
import SearchableEvents from './SearchableEvents'
import SearchBar from './SearchBar'

export default class extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <SearchableEvents />
            </div>
        )
    }
}
