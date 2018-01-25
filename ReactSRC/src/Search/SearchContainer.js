import React, {Component} from 'react';

class SearchContainer extends Component {

    state = {
        search: ''
    }

    handleChange = (event) => {
        this.setState( {search : event.target.value});
    }

    handleSubmit = (event) => {
        this.props.history.push('/products?search=' + this.state.search);
        event.preventDefault();
    }

    render() {
        return (
            <div className="row">
                <form className="navbar-form" onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input className="form-control" placeholder="Search" type="text" value={this.state.search} onChange={this.handleChange}/>
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit" onSubmit={this.handleSubmit}><i className="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchContainer;