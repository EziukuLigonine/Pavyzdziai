import React from 'react';
import {ProductCardComponent} from "./ProductCardComponent";
export var ProductListComponent = (props) => {
    const mobiles = props.products.map((product, index) => {
        var cardComponent = <ProductCardComponent
            key={index}
            id={product.id}
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
            quantity={product.quantity}
            history={props.history}
        />;
        return (
            cardComponent
        );
    });

    return (
        <div className="row">
            {mobiles}
        </div>
    );
};


