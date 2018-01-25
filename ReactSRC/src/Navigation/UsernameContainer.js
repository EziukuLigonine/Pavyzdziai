import React, {Component} from 'react';
import {injector} from 'react-services-injector';
import axios from 'axios';

class UsernameContainer extends Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState( {name : event.target.value});
    }

    handleSubmit = (event) => {
        const {User} = injector.get();
        User.changeUser(this.state.name);
        this.setState( {name : User.currentUser});
        axios.post('http://localhost:8081/api/users/' + this.state.name, this.state.name)
        .then(response => {
            
        })  
        .catch(error => {
            console.log(error);
        })
        event.preventDefault();
    }

    render() {
        return (
            <form className="navbar-form navbar-left" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input className="form-control" placeholder="Username" type="text" value={this.state.name} onChange={this.handleChange}/>
                </div>
            </form>
        );
    }
}

export default injector.connect(UsernameContainer);