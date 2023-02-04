import React, { Component } from 'react';
import Sporter from './Sporter';
import { Consumer } from '../../context';

class Sporters extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { sporters } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-4">
                <span className="text-danger">Club Users List</span>
                <button className="btn btn-danger btn-lg float-right mt-3 px-5">Add</button>
              </h1>
              {sporters.map(sporter => (
                <Sporter key={sporter.id} sporter={sporter} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Sporters;
