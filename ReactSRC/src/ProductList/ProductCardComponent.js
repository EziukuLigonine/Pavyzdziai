import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export class ProductCardComponent extends React.Component {


    getProduct = (event) => {
        this.props.history.push("/products/" + this.props.id);
        event.preventDefault();
    };

    render() {
        return (
            <div className="col-xs-12 col-sm-4 text-center">
                <div className="thumbnail">
                    <h3>{this.props.title}</h3>
                    <img src={this.props.image} alt=""/>
                    <h4>{this.props.description}</h4>
                    <p>{this.props.price} €</p>
                    <p>Quantity: {this.props.quantity} </p> 
                    <p><button className="btn btn-primary" onClick={this.getProduct}>Details</button></p>
                </div>
            </div>
        );
    }

};