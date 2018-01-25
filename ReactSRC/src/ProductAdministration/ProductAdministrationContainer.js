import React from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {ProductAdministrationComponent} from "./ProductAdministrationComponent";

export class ProductAdministrationContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            description: '',
            price: 0,
            quantity: 0,
            history: props.history
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
        this.setState({
                [name]: value
            }
        );
    };

    handleClick = (event) => {
        const outputProduct = {
            title: this.state.title,
            image: this.state.image,
            description: this.state.description,
            price: this.state.price,
            quantity: this.state.quantity
        };

        axios.post("http://localhost:8081/api/admin/products/new", outputProduct)
        //axios.post("https://itpro2017.herokuapp.com/api/products", outputProduct)
            .then((response) => {
                this.setState( {
                    title: '',
                    image: '',
                    description: '',
                    price: 0,
                    quantity: 0
                });
            })
            .catch((error) => {
                console.log(error);
            });
            event.preventDefault();
    };

    render() {
        return (
            <div>
                <ProductAdministrationComponent
                    title={this.state.title}
                    image={this.state.image}
                    description={this.state.description}
                    price={this.state.price}
                    quantity={this.state.quantity}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}

