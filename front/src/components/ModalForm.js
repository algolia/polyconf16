import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../actions'

class ModalForm extends Component {
    constructor(props) {
        super(props)
        this.dispatch = props.dispatch
    }

    render() {
        let [name, start, end, tags] = ['', '', '', '']

        return (
           <div>
               <div className='modal-body'>
                   <label for="f-name">Name</label>
                   <input type='text' id='f-name' className='form-control'
                       onChange={e => name = e.target.value} />
                   <label for="f-tags">Tags</label>
                   <input type='text' id='f-tags' className='form-control'
                       onChange={e => tags = e.target.value} />
                   <label for="f-start">Start</label>
                   <input type='text' id='f-start' className='form-control'
                       onChange={e => start = e.target.value} />
                   <label for="f-end">End</label>
                   <input type='text' id='f-end' className='form-control'
                       onChange={e => end = e.target.value} />
                </div>
                <div className="modal-footer">
                    <button className='btn btn-default'
                        data-dismiss='modal'>
                        Close
                    </button>
                    <button type='submit' className='btn btn-primary'
                        data-dismiss='modal' onClick={() => {
                            const event = {
                                name: name,
                                tags: tags.split(' '),
                                start: start,
                                end: end,
                                people: []
                            }

                            this.dispatch(addEvent(event))
                        }}>
                        Add
                    </button>
                </div>
           </div>
        )
    }
}

export default connect()(ModalForm)
