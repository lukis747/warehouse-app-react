import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ProductView extends Component {

  getProduct(id,products)
  {
    return products.filter(x => x.id == id)[0];
  }
  render() {
    let product = this.getProduct(this.props.match.params.id,this.props.products);
    return (
      <div>
        <h4 className="mb-4 mt-4">Edit Product</h4>
        <table className="table table-hover w-50">
        <thead>
          <tr>
            <td>Property</td>
            <td>Value</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{product.name}</td>
          </tr>
          <tr>
            <td>EAN</td>
            <td>{product.ean}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{product.weight}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{product.type}</td>
          </tr>
          <tr>
            <td>Color</td>
            <td>{product.color}</td>
          </tr>
          <tr>
            <td>Active</td>
            <td>{product.active ? 'Yes' : 'No'}</td>
          </tr>
        </tbody>
        </table>
        
        <br/>
        <Link to="/">Go back</Link>
        <p></p>
      </div>
    )
  }
}
