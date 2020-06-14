import React, { Component } from 'react'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center", marginTop: 200 }}><span style={{ color: "red" }}>404</span> Page Not Found</h1>
                <h4 style={{ textAlign: "center" }}>Sorry, for the loss</h4>
            </div>
        )
    }
}
