import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddSporter extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    address: '',
    company: '',
    website: '',
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone, address, company, website } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    if (address === '') {
      this.setState({ errors: { address: 'Address is required' } });
      return;
    }

    if (company === '') {
      this.setState({ errors: { company: 'Company is required' } });
      return;
    }

    if (website === '') {
      this.setState({ errors: { website: 'Website is required' } });
      return;
    }

    const newSporter = {
      name,
      email,
      phone,
      address,
      company,
      website
    };

    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newSporter
    );

    dispatch({ type: 'ADD_SPORTER', payload: res.data });

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      address: '',
      company: '',
      website: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, address, company, website, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Sporter</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup label="Name" name="name" placeholder="Enter Name" value={name} onChange={this.onChange} error={errors.name}/>
                  <TextInputGroup label="Email" name="email" type="email" placeholder="Enter Email" value={email} onChange={this.onChange} error={errors.email}/>
                  <TextInputGroup label="Phone" name="phone" placeholder="Enter Phone" value={phone} onChange={this.onChange} error={errors.phone}/>
                  <TextInputGroup label="Address" name="address" placeholder="Enter Address" value={address.street} onChange={this.onChange} error={errors.address}/>
                  <TextInputGroup label="Company" name="company" placeholder="Enter Company" value={company} onChange={this.onChange} error={errors.company}/>
                  <TextInputGroup label="Website" name="website" placeholder="Enter Website" value={website} onChange={this.onChange} error={errors.website}/>
                  <input type="submit" value="Add Sporter" className="btn btn-light btn-block"/>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddSporter;
