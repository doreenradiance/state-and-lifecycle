import React, { Component, Fragment } from 'react';

class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gen: "",
            email: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state)
        this.setState({name: "", gen: "", email: ""})
        console.log("submitted");
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="gen">Gen</label>
                        <input type="number" name="gen" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={this.handleChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default AddUserForm;
