import React from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {ProductAdministrationComponent} from "./ProductAdministrationComponent";

export class ProductEditComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            description: '',
            price: 0,
            quantity: 0,
            history: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/api/admin/products/' + this.props.match.params.id)
        //axios.get('https://itpro2017.herokuapp.com/api/products/' + this.props.match.params.id)
        .then(response => {
            const {description, image, price, quantity, title} = response.data;
            this.setState({
                title : title,
                image : image,
                description : description,
                price : price,
                quantity : quantity,
                history: this.props.history
            })
        })
        .catch(error => {
            console.log(error);
        })
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
            description: this.state.description,
            image: this.state.image,
            price: this.state.price,
            quantity: this.state.quantity,
            title: this.state.title
        };

        axios.put('http://localhost:8081/api/admin/products/' + this.props.match.params.id, outputProduct)
        //axios.put("https://itpro2017.herokuapp.com/api/products/" + this.props.match.params.id, outputProduct)
            .then((response) => {
                this.props.history.goBack();
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

