import React from 'react';
import './styles/bootstrap.min.css';
import Product from './Product/Product';
import ProductsTable from './Product/ProductsTable';
import Header from './Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ProductView from './Product/ProductView';
import ProductEditView from './Product/ProductEditView';
import ProductCreateView from './Product/ProductCreateView';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    if(localStorage.getItem('state') !== null){
      // Grab data from local storage
      let storage = JSON.parse(localStorage.getItem('state'));
      let products = storage.products.map((product) => new Product(product.id,product.name,product.ean,product.type,product.weight,product.color,product.active,product.price,product.quantity));

      this.state = {
        products
      };
    }else{
      // Initial data if you have not set anything yet
      this.state = {
        products : [
          new Product(0,'Banana',94009456,'Groceries',0.100,'Yellow',true,10,5),
          new Product(1,'Stawberry',94009145,'Groceries',0.300,'Red',true,20,0),
          new Product(2,'Orange',94009123,'Groceries',0.200,'Orange',false,20,1),          
        ]
      };
      this.storeStates(this.state);
    }  
  }
  
  // On checkbox status change mutates the value in state and persists to the local storage
  productActivityHandler = id => {
    this.setState(previousState => {
      let products = [...previousState.products];
      let indexOfProduct = products.findIndex(product => product.id === id);

      let product = products[indexOfProduct];
      product.setActivity(!product.active);

      products[indexOfProduct] = product;
      this.storeStates(this.state);
      return { products };
    });
  };

  // Product edit handler
  productEditHandler = (data) => {
    this.setState(previousState => {
      let products = [...previousState.products];
      let indexOfProduct = products.findIndex(product => product.id === data.id);

      let product = products[indexOfProduct];
      product.name = data.name;
      product.ean = data.ean;
      product.color = data.color;
      product.weight = data.weight;
      product.active = data.active;
      product.price = data.price;
      product.quantity = data.quantity;

      products[indexOfProduct] = product;
      this.storeStates(this.state);
      return { products };
    });
  };

  // Product create handler
  productCreateHandler = (data) => {
    this.setState(previousState => {
      let products = [...previousState.products];
      var maxIndex = products.reduce(function(a, b) {
        return Math.max(a.id, b.id);
      });

      let product = new Product(maxIndex+1,data.name,data.ean,data.type,data.weight,data.color,data.active,data.price,data.quantity);
          
      products.push(product);
      this.storeStates(this.state);
      return { products };
    });
  };



  // Removes product from the local storage
  productDeleteHandler = id => {
    let products =  this.state.products.filter(x => x.id !== id);
    this.setState({products});
    this.storeStates({products});
  };

  // Persist data to local storage
  storeStates(data)
  {
    localStorage.setItem('state',JSON.stringify(data));
  }
  

  render()
  {
    return (
    <Router>     
    <div className="App container">
      <Header />
      <Switch>
        <Route path="/products/create" render={(props) => 
          <ProductCreateView onCreate={this.productCreateHandler} {...props}/>
        }></Route>

        <Route path="/products/:id/edit" render={(props) => 
          <ProductEditView onEdit={this.productEditHandler} products={this.state.products} {...props}/>
        }></Route>

        <Route path="/products/:id" render={(props) => 
          <ProductView products={this.state.products} {...props}/>
        }></Route>    
        
        <Route path="/">
          <h4 className="mb-2 mt-2">Products list</h4>
          <Link to="/products/create">
            <button className="btn btn-success btn-sm m-2">Create new product</button>
          </Link>
          <ProductsTable 
            products={this.state.products} 
            onActivityChange={this.productActivityHandler} 
            onDelete={this.productDeleteHandler}
          />
        </Route>
      </Switch>
    </div>
    </Router>
  );
  }
}

export default App;
