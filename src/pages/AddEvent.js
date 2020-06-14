import React, { Component } from 'react'
import State from "../components/State";
import "./addevnt.css";

class AddEvent extends Component {
    showForm() {
    }
    render() {
        return (
            <div>
                <h1 style={{ color: "red", textAlign: "center" }}>
                    ADD  EVENT
                </h1>
                {/* <h3 style={{ textAlign: "center", marginTop: 100 }}>Want To Add Event?</h3> */}
                {/* <button className="btn btn-success" onClick={this.showForm()} style={{ marginLeft: "48%" }}>ADD</button> */}

                <form className="form">
                    Event:<input className="form-control" type="text" value="Ex Match,Picnic" required /><br />
                    Category:<input className="form-control" type="text" value="Ex Travel,Sports" /><br />
                    Price:<input className="form-control" type="text" value="Rs.." required />
                    <input style={{ marginLeft: "48%", backgroundColor: "green" }} type="submit" value="Submit Event" />
                </form>
                <State />
            </div>
        )
    }
}
export default AddEvent;