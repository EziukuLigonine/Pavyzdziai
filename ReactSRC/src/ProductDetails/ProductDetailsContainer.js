import React from 'react';
import axios from 'axios';
import ProductDetailsComponent from "./ProductDetailsComponent";

export class ProductDetailsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {product: {}}
    }

    componentDidMount() {
        axios.get('http://localhost:8081/api/products/' + this.props.match.params.id)
        //axios.get('https://itpro2017.herokuapp.com/api/products/' + this.props.match.params.id)
            .then((response) => {
                this.setState({product: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return <ProductDetailsComponent details={this.state.product} history={this.props.history}/>;
    }
}