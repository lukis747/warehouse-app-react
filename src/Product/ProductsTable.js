import React from 'react'
import { Link } from 'react-router-dom';

export default class ProductsTable extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      products: this.props.products
    }
    
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.products);
    this.setState({ products: nextProps.products });  
  }
  render(){
    return (
      <div>
        <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">EAN</th>
            <th scope="col">Weight</th>
            <th scope="col">Color</th>
            <th scope="col">Active</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map((product) => {
            return (
              <tr className={!product.active ? 'table-dark' : ''}>
                <td>{product.name}</td>
                <td>{product.ean}</td>
                <td>{product.weight}</td>
                <td>{product.color}</td>
                <td><input type="checkbox" checked={product.active} onChange={() => this.props.onActivityChange(product.id)}></input></td>
                <td>
                  <Link to={'/products/'+product.id}>
                    <button type="button" className="btn btn-primary  btn-sm m-1">View</button></Link>
                  <Link to={'/products/'+product.id+'/edit'}>
                    <button type="button" className="btn btn-warning  btn-sm m-1">Edit</button>
                  </Link>
                  <button type="button" className="btn btn-danger  btn-sm m-1" onClick={()=> this.props.onDelete(product.id)}>Delete</button>
                </td>
            </tr>
            );
          })}
  
        </tbody>
        </table> 
      </div>
    );
  }
}

