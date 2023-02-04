import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditSporter extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    address: '',
    company: '',
    website: '',
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const sporter = res.data;

    this.setState({
      name: sporter.name,
      email: sporter.email,
      phone: sporter.phone,
      address: sporter.address,
      company: sporter.company,
      website: sporter.website,
    });
  }

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
    const updateSporter = {
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateSporter
    );

    dispatch({ type: 'UPDATE_SPORTER', payload: res.data });

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
              <div className="card-header">Edit Sporter</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup label="Name" name="name" placeholder="Enter Name" value={name} onChange={this.onChange} error={errors.name}/>
                  <TextInputGroup label="Email" name="email" type="email" placeholder="Enter Email" value={email} onChange={this.onChange} error={errors.email}/>
                  <TextInputGroup label="Phone" name="phone" placeholder="Enter Phone" value={phone} onChange={this.onChange} error={errors.phone}/>
                  <TextInputGroup label="Address" name="address" placeholder="Enter Address" value={address.street} onChange={this.onChange} error={errors.address}/>
                  <TextInputGroup label="Company" name="company" placeholder="Enter Company" value={company.name} onChange={this.onChange} error={errors.company}/>
                  <TextInputGroup label="Website" name="website" placeholder="Enter Website" value={website} onChange={this.onChange} error={errors.website}/>
                  <input type="submit" value="Update Sporter" className="btn btn-light btn-block"/>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditSporter;
