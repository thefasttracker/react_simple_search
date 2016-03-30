import React from 'react'
import ReactDOM from 'react-dom'
import ContactList from './components/ContactList'
import fixtures from './fixtures'


ReactDOM.render(<ContactList CONTACTS = {fixtures} />, document.getElementById('container'))