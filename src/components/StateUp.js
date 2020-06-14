import React, { Component } from 'react'

class StateUp extends Component {
    state = {
        events: [
            { id: "01", event: "New Year", category: "fun", price: "2500", Date: "31 Dec 2020" },
            { id: "02", event: "Picnic", category: "Excursion", price: "3500", Date: "15 Jul 2020" },
            { id: "03", event: "World Tour", category: "Travel", price: "9500", Date: "14 Aug 2020" },
            { id: "04", event: "Cricket Match", category: "Soprts", price: "5500", Date: "14 Sep 2020" },
            { id: "05", event: "Captain America", category: "Movie", price: "1500", Date: "15 Aug 2020" },
        ]
    }
    getId(id) {
        var e = this.state.events.find(x => x.id == id);
        this.refs.id.value = e.id;
        this.refs.event.value = e.event;
        this.refs.cate.value = e.category;
        this.refs.price.value = e.price;
        this.refs.date.value = e.Date;
    }
    addRow() {
        var e = {
            id: this.refs.id.value,
            event: this.refs.event.value,
            category: this.refs.cate.value,
            price: this.refs.price.value,
            Date: this.refs.date.value
        }
        var events = this.state.events;
        events.push(e);
        this.setState({ events: events });
        this.ClearAll();
    }
    ClearAll() {
        this.refs.id.value = this.refs.event.value = this.refs.cate.value = this.refs.price.value = this.refs.date.value = ""
    }
    updateRow() {
        var id = this.refs.id.value;
        var e = {
            id: this.refs.id.value,
            event: this.refs.event.value,
            category: this.refs.cate.value,
            price: this.refs.price.value,
            Date: this.refs.date.value
        }
        var index = this.state.events.findIndex(x => x.id == id);
        var events = this.state.events;
        events[index] = e;
        this.setState({ events: events });
    }
    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center", color: "green" }}>Upcoming Events</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th> Id</th><th> Event</th><th> Category</th><th> Price</th><th>Date</th><th>Operations</th>
                        </tr></thead>
                    {
                        this.state.events.map(x =>
                            <tr>
                                <td>{x.id}</td>
                                <td>{x.event}</td>
                                <td>{x.category}</td>
                                <td>{x.price}</td>
                                <td>{x.Date}</td>
                                <td><button onClick={() => this.getId(x.id)}>Select</button></td>
                            </tr>)}
                </table>
                <hr />
                <p style={{ marginLeft: "48%", color: "red" }}>ID: <input type="number" ref="id" /></p><br />
                <p style={{ marginLeft: "46.5%", color: "red" }}>Event: <input type="text" ref="event" /></p><br />
                <p style={{ marginLeft: "45%", color: "red" }}>Category: <input type="text" ref="cate" /></p><br />
                <p style={{ marginLeft: "47%", color: "red" }}>Price: <input type="number" ref="price" /></p><br />
                <p style={{ marginLeft: "47%", color: "red" }}>Date: <input type="text" ref="date" /></p><br />
                <p style={{ marginLeft: "51%", color: "red" }}><button onClick={() => this.updateRow()} className="btn btn-success">Update </button></p>
                <button style={{ marginLeft: "51%" }} className="btn btn-danger" onClick={() => this.ClearAll()}>Clear All</button>
            </div>)
    }
}
export default StateUp;