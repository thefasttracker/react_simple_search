import React, { Component, PropTypes } from 'react'


class Contact extends Component {

    static propTypes = {
        contact: PropTypes.object.isRequired
    }

    render() {
        const {contact} = this.props
        return (
            <div>
                <img className="contact-image" src={contact.image} width="60px" height="60px"/>
                <div className="contact-info">
                    <div className="contact-name"> {contact.name} </div>
                    <div className="contact-number"> {contact.phoneNumber} </div>
                </div>
            </div>
        )
    }
}



export default Contact