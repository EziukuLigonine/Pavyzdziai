import React from 'react';
import axios from 'axios';
import {injector} from 'react-services-injector';

class CartListComponent extends React.Component {

    removeFromCart = (event) => {
        const {User, Cart} = injector.get();
        if (User.currentUser !== null) {
            this.props.removeItem(event.target.id);
            axios.delete('http://localhost:8081/api/users/' + User.currentUser + '/cart-products/' + event.target.id)
            .then(response => {
                Cart.removeProduct();
            })
            .catch(error => {
                console.log(error);
            })
        }
    };

    render() {
        const userItems = this.props.items.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.image}</td>
                    <td>{item.title}</td>
                    <td></td>
                    <td><button id={item.id} className="btn btn-danger" onClick={this.removeFromCart}>Remove from cart</button></td>
                </tr>
            );
    
        });
        return (
            <div className="panel panel-default">
                <table className="table table-hover">
                    <tbody>
                        {userItems}
                    </tbody>
                </table>
            </div>
        );
    }
   
};

export default injector.connect(CartListComponent);