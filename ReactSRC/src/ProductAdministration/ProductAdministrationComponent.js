import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export var ProductAdministrationComponent = (props) => {

    return (
        <form className="form-horizontal">

            <div className="form-group">
                <label className="col-sm-2 control-label">Title</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="title" placeholder="Title" value={props.title}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Image</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="image" placeholder="Image URL" value={props.image}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Description</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="description" placeholder="Description" value={props.description}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Price</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="price" placeholder="Price" value={props.price}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Quantity</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="quantity" placeholder="Quantity" value={props.quantity}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-3">
                    <button type="submit" className="btn btn-success" onClick={props.onClick}>Save</button>
                    <button type="submit" className="btn btn-default" onClick={props.history.goBack}>Cancel</button>
                </div>
            </div>
        </form>
    );
};
