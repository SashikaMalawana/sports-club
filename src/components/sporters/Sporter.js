import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Sporter extends Component {
  state = {
    showSporterInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_SPORTER', payload: id });
    }
    catch (e) {
      dispatch({ type: 'DELETE_SPORTER', payload: id });
    }
  };

  render() {
    const { id, name, email, phone, address, company, website } = this.props.sporter;
    const { showSporterInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3 bg-danger">
              <h4>
                {name}
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'black' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`sporter/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{ cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem' }}
                  />
                </Link>
                <i
                  onClick={() =>
                    this.setState({
                      showSporterInfo: !this.state.showSporterInfo
                    })
                  }
                  className="fas fa-eye"
                  style={{ cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem' }}
                />
              </h4>
              {showSporterInfo ? (
                <ul className="list-group">
                  <li className="list-group-item list-group-item-secondary"><i class="fa fa-signature"></i> Email: {email}</li>
                  <li className="list-group-item"><i class="fa fa-phone"></i> Phone: {phone}</li>
                  <li className="list-group-item list-group-item-secondary"><i class="fa fa-street-view"></i> Address: {address.street}, {address.city}</li>
                  <li className="list-group-item"><i class="fa fa-building"></i> Company: {company.name}</li>
                  <li className="list-group-item list-group-item-secondary"><i class="fa fa-globe"></i> Website: {website}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Sporter.propTypes = {
  sporter: PropTypes.object.isRequired
};

export default Sporter;
