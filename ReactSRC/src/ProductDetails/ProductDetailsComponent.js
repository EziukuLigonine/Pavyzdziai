import React from 'react';
import axios from 'axios';
import {injector} from 'react-services-injector';

const errorStyle = {
    color: 'red'
}

class ProductDetailsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {amount: 0, errorMessage: ''}
    }

    addCartProduct = (event) => {
        const {User, Cart} = injector.get();
        if (User.currentUser !== null) {
            axios.post('http://localhost:8081/api/users/' + User.currentUser + '/cart-products', this.props.details)
            //axios.post("https://itpro2017.herokuapp.com/api/users/" + username + "/cart-products", this.props.details)
            .then((response) => {
                if (response.status === 204) {
                    this.setState({errorMessage: <p style={errorStyle}>Item is already in cart</p>});
                } else {
                    Cart.addProduct(User.currentUser);
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h4>{this.props.details.title}</h4>
                <p>{this.props.details.description}</p>
                <p>Price: {this.props.details.price} €</p>
                <button className="btn btn-success" onClick={this.addCartProduct}>To cart</button>
                <button className="btn btn-default" onClick={this.props.history.goBack}>Back</button>
                {this.state.errorMessage}
            </div>
        );
    }
    
};

export default injector.connect(ProductDetailsComponent);