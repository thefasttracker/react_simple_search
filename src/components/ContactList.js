import React, { Component, PropTypes } from 'react'
import Contact from './Contact'

class ContactList extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            displayedContacts: this.props.CONTACTS
        }
    }

    handleSearch = (e) => {
        const { CONTACTS } = this.props
        const searchQuery = e.target.value.toLowerCase()
        const displayedContacts = CONTACTS.filter((el) => {
            const searchValue = el.name.toLowerCase()
            return ~searchValue.indexOf(searchQuery)
        })
        this.setState({
            displayedContacts
        })

    }

    render() {
        const contacts = this.state.displayedContacts.map((el) =>
            <li key = {el.id} className="contact">
                <Contact contact = {el}/>
            </li>
        )

        return (
            <div className="contacts">
                <input type="text" className="search-field" onChange={this.handleSearch} />
                <ul className="contacts-list">
                    { contacts }
                </ul>
            </div>
        )
    }
}

export default ContactList