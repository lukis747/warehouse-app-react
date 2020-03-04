import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Tabs from '../Tabs/Tabs';
import HistoryEvents from '../HistoryEvents';
import HistoryChart from '../Chart/HistoryChart';

export default class ProductView extends Component {

  getProduct(id,products)
  {
    return products.filter(x => x.id == id)[0];
  }
  render() {
    let product = this.getProduct(this.props.match.params.id,this.props.products);
    return (
    <div>
    <br/>
     <Tabs>
      <div label="Product details">
      <h4 className="mb-4 mt-4">Product details</h4>
      <table className="table table-hover">
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
          <tr>
            <td>Price</td>
            <td>{product.price}</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>{product.quantity}</td>
          </tr>
        </tbody>
        </table>
      </div>
      <div label="Price history">
        <HistoryEvents events={product.priceHistory} max="5"/>
        <HistoryChart title="Price history" events={product.priceHistory} xtitle="Price" max="5"/>
      </div>
      <div label="Quantity history">
        <HistoryEvents events={product.quantityHistory} max="5"/>
        <HistoryChart title="Quantity history" events={product.quantityHistory} xtitle="Quantity" max="5"/>
      </div>
    </Tabs>


        
  
      <br/>
      <Link to="/">Go back</Link>
      <p></p>
    </div>
    )
  }
}
