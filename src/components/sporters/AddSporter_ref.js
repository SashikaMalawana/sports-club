import React, { Component } from 'react';

class AddSporter extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
    this.addressInput = React.createRef();
    this.companyInput = React.createRef();
    this.websiteInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const sporter = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
      address: this.addressInput.current.value,
      company: this.companyInput.current.value,
      website: this.websiteInput.current.value
    };

    console.log(sporter);
  };

  static defaultProps = {
    name: 'Peter Williams',
    email: 'peter@gmail.com',
    phone: '293-239-9283',
    address: 'West Street, CIS',
    company: 'Soft Org',
    website: 'www.softorg.com'
  };

  render() {
    const { name, email, phone, address, company, website } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Sporter</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter Name..." defaultValue={name} ref={this.nameInput}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="form-control form-control-lg" placeholder="Enter Email..." defaultValue={email} ref={this.emailInput}/>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" className="form-control form-control-lg" placeholder="Enter Phone..." defaultValue={phone} ref={this.phoneInput}/>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" name="address" className="form-control form-control-lg" placeholder="Enter Address..." defaultValue={address} ref={this.addressInput}/>
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" name="company" className="form-control form-control-lg" placeholder="Enter Company..." defaultValue={company} ref={this.companyInput}/>
            </div>
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <input type="text" name="website" className="form-control form-control-lg" placeholder="Enter Website..." defaultValue={website} ref={this.websiteInput}/>
            </div>
            <input
              type="submit"
              value="Add Sporter"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddSporter;
