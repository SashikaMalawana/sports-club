import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_SPORTER':
      return {
        ...state,
        sporters: state.sporters.filter(
          sporter => sporter.id !== action.payload
        )
      };
    case 'ADD_SPORTER':
      return {
        ...state,
        sporters: [action.payload, ...state.sporters]
      };
    case 'UPDATE_SPORTER':
      return {
        ...state,
        sporters: state.sporters.map(
          sporter =>
          sporter.id === action.payload.id
              ? (sporter = action.payload)
              : sporter
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    sporters: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    this.setState({ sporters: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
