import React, { Component } from 'react'

export class Alert extends Component {
    render() {
        return (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Learn Event Organization with Us</strong> You should check in on some of those fields below.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )
    }
}

export default Alert
