import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {AdminProductComponent} from "./AdminProductComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

export var AdminProductListComponent = (props) => {

    const products = props.products.map((product, index) => {
        return (
            <AdminProductComponent
                key = {index}   
                id = {product.id}
                image = {product.image}
                title = {product.title}
                history = {props.history}
                remove = {props.remove}
            />
        );
    });

    return (
        <div>
            <div className="panel panel-default" style={tableStyle.margin}>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


