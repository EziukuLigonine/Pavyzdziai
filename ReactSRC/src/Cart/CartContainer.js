import React from 'react';
import axios from 'axios';
import CartListComponent from "./CartListComponent";
import {injector} from 'react-services-injector';

class CartContainer extends React.Component {

    constructor() {
        super();
        this.state = {items: []};
    }

    componentDidMount() {
        const {User, Cart} = injector.get();
        if (User.currentUser !== null) {
            axios.get('http://localhost:8081/api/users/' + User.currentUser + '/cart-products')
            .then(response => {
                Cart.incrementCart(response.data.length);
                this.setState({items: response.data});
            })
           .catch(error => {
               console.log(error);
            });
        }
    }

    removeItem = (index) => {
        const items = this.state.items.filter((item) => {
            return item.id !== parseInt(index, 10);
        });
        this.setState({ items : items });
    }

    render() {
        return (
            <div>
                <CartListComponent items={this.state.items} removeItem={this.removeItem} />
            </div>

        );
    }
}

export default injector.connect(CartContainer);
