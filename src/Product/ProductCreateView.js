import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

export default class ProductCreateView extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      name: '',
      ean: null,
      weight: 0,
      color: '',
      type: '',
      active: true,
      error:''
    };
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  onEanChange = (e) => {
    this.setState({
      ean: parseInt(e.target.value)
    });
  }
  onWeightChange = (e) => {
    this.setState({
      weight: parseFloat(e.target.value)
    });
  }
  OnColorChange = (e) => {
    this.setState({
      color: e.target.value
    });
  }
  onActiveChange = (e) => {
    this.setState({
      active: e.target.checked
    });
  }
  onTypeChange = (e) => {
    this.setState({
      type: e.target.value
    });
  }
  redirect(path){
    this.props.history.push(path);
  }

  onSubmit = (e) =>{
    e.preventDefault();
    if(this.state.name == '' ||
        !this.state.ean ||
        !this.state.weight ||
        this.state.color == '' ||
        this.state.type == '')
    {
      console.log(this.state);
      this.setState({
      error: 'Please fill in all fields'
    })
    }else{
      this.props.onCreate(this.state);
      this.redirect('/');
    }
  }

  render() {
     return (
      <div>
        <form>
          <h4 className="mb-4 mt-4">Create a new product</h4>
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
              <td>
                <input type="text" value={this.state.name} onChange={this.onNameChange} className="form-control"></input>
              </td>
            </tr>
            <tr>
              <td>EAN</td>
              <td>
                <input type="number" value={this.state.ean} onChange={this.onEanChange} className="form-control"></input>
              </td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>
                <input type="number" value={this.state.weight} onChange={this.onWeightChange} className="form-control"></input>
              </td>
            </tr>
            <tr>
              <td>Type</td>
              <td>
                <input type="text" value={this.state.type} onChange={this.onTypeChange} className="form-control"></input>
              </td>
            </tr>
            <tr>
              <td>Color</td>
              <td>
                <input type="text" value={this.state.color} onChange={this.OnColorChange} className="form-control"></input>
              </td>
            </tr>
            <tr>
              <td>Active</td>
              <td>
                <input type="checkbox" checked={this.state.active} onChange={this.onActiveChange} className="form-control"></input>
              </td>
            </tr>
          </tbody>
          </table>
          <p><button type="submit" onClick={this.onSubmit} className="btn btn-primary">Save changes</button></p>
          {this.state.error != '' ? <p className="alert alert-trim alert-danger">{this.state.error}</p> : ''}
          <br/>
          <Link to="/">Go back</Link>
          <p></p>
        </form>
      </div>
    )
  }
}
