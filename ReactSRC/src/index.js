import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {NavigationComponent} from "./Navigation/NavigationComponent";
import {ProductListContainer} from "./ProductList/ProductListContainer";
import {AdminContainer} from "./ProductList/AdminContainer";
import {ProductAdministrationContainer} from "./ProductAdministration/ProductAdministrationContainer";
import {ProductDetailsContainer} from "./ProductDetails/ProductDetailsContainer";
import CartContainer from "./Cart/CartContainer";
import {ProductEditComponent} from "./ProductAdministration/ProductEditComponent";

import {injector} from 'react-services-injector';
import services from './services';

injector.register(services);

ReactDOM.render((
        <BrowserRouter>
            <div className="container">
                <NavigationComponent />
                <Switch>
                    <Route exact path="/" component={ProductListContainer} />
                    <Route exact path="/products/:id" component={ProductDetailsContainer} />
                    <Route exact path="/products" component={ProductListContainer} />
                    <Route exact path="/admin/products/new" component={ProductAdministrationContainer} />
                    <Route exact path="/admin" component={AdminContainer} />
                    <Route exact path="/admin/products/:id" component={ProductEditComponent} />
                    <Route path="/cart-details" component={CartContainer} />
                </Switch>
            </div>
        </BrowserRouter>
    ),
    document.getElementById('root'));

