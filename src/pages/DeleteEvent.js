import React, { Component } from 'react'
import StateDel from '../components/StateDel';
export default class DeleteEvent extends Component {
    render() {
        return (
            <div>
                <p style={{ color: "red" }}>*No Refund for cancelling the events</p>
                <h1 style={{ textAlign: "center", color: "red", marginTop: 50 }}>DELETE EVENT</h1>
                <StateDel />
            </div>
        )
    }
}
