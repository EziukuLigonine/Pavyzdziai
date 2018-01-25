import React, {Component} from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {AdminProductListComponent} from "./AdminProductListComponent";

export class AdminContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/products')
        //axios.get('https://itpro2017.herokuapp.com/api/products')
            .then((response) => {
                this.setState({products: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // funkcija nukreipianti į '/admin/products/new' URL, vykdoma paspaudus
    // 'Add new product' mygtuką
    newProduct = () => {
        this.props.history.push("/admin/products/new");
    };

    removeItem = (index) => {
        const items = this.state.products.filter((product) => {
          return product.id !== parseInt(index, 10); //heroku serveriui
        });
        this.setState({ products : items });
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.newProduct}>Add new product</button>
                <AdminProductListComponent products={this.state.products} history={this.props.history} remove={this.removeItem}/>
            </div>
        );
    }
}