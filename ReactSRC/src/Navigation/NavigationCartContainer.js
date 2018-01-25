import React from 'react';
import {NavLink} from 'react-router-dom';
import {injector} from 'react-services-injector';

class NavigationCartContainer extends React.Component {

    render() {
        const {Cart} = injector.get();
        return (
            <ul className="nav navbar-nav navbar-right">
                <li onClick={this.handleClick}>
                    <NavLink to="/cart-details">
                        <span className="glyphicon glyphicon-shopping-cart"></span>
                        &nbsp; {Cart.currentAmount} items
                    </NavLink>
                </li>
            </ul>
        )
    }
}

export default injector.connect(NavigationCartContainer, {
    toRender: ['Cart'] //we only need Cart in the component's render() method
  });