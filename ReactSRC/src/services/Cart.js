import {Service} from 'react-services-injector';
import axios from 'axios';

class Cart extends Service {
    constructor() {
        super();
        this.incrementCart(0);
    }

    incrementCart(number) {
        this._amount = number;
    }

    addProduct(user) {
        axios.get('http://localhost:8081/api/users/' + user + '/cart-products')
        .then(response => {
            console.log(response.data.length);
            this._amount = response.data.length;
        })
    }

    removeProduct() {
        this._amount--;
    }

    get currentAmount() {
        return this._amount;
    }
}

Cart.publicName = 'Cart';

export default Cart;