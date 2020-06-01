import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';

import countries from './countries.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [...countries]
    };
  }
  render() {
    return (
      <BrowserRouter>
        <nav>
          <h3>
            {' '}
            <strong>WikiCountries</strong>{' '}
          </h3>
        </nav>
        <div>
          <Route
            path="/"
            render={props => (
              <CountriesList countries={this.state.countries} {...props} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
