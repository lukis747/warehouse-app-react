import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Product from './Product';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    if(localStorage.getItem('state') !== null){
      // Grab data from local storage
      let storage = JSON.parse(localStorage.getItem('state'));
      let products = storage.products.map((product) => new Product(product.name,product.ean,product.type,product.weight,product.color,product.active));

      this.state = {
        products
      };
    }else{
      // Initial data if you have not set anything yet
      this.state = {
        products : [
          new Product('Banana',94009456,'Groceries',0.100,'Yellow',true),
          new Product('Orange',94009123,'Groceries',0.200,'Orange',true),
        ]
      };
    }  
  }
  
  // On checkbox status change mutates the value in state and persists to the local storage
  setActivity = ean => {
    this.setState(previousState => {
      let products = [...previousState.products];
      let indexOfProduct = products.findIndex(product => product.ean === ean);

      let product = products[indexOfProduct];
      product.setActivity(!product.active);

      products[indexOfProduct] = product;
      this.storeStates();
      return { products };
    });
  };

  // Persist data to local storage
  storeStates()
  {
    localStorage.setItem('state',JSON.stringify(this.state));
  }

  render()
  {
    return (
    <div className="App">
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
            <tr className={!product.active ? 'table-danger' : ''}>
              <td>{product.name}</td>
              <td>{product.ean}</td>
              <td>{product.weight}</td>
              <td>{product.color}</td>
              <td><input type="checkbox" checked={product.active} onChange={() => this.setActivity(product.ean)}></input></td>
              <td>
                <button type="button" class="btn btn-primary  btn-sm mr-1">View</button>
                <button type="button" class="btn btn-warning  btn-sm mr-1">Edit</button>
                <button type="button" class="btn btn-danger  btn-sm">Delete</button>
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

export default App;
