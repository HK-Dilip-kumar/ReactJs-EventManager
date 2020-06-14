import React, { Component } from 'react'
import StateUp from '../components/StateUp';

class UpdateEvent extends Component {
    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center", color: "red", marginTop: 100 }}>UPDATE EVENT</h1>
                <StateUp />
            </div>
        )
    }
}
export default UpdateEvent;