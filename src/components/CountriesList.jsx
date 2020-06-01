import React, { Component } from 'react';

import CountryDetail from './CountryDetail';

class CountriesList extends Component {
  render() {
    const countries = this.props.countries;
    return (
      <section className="wiki-countries">
        <ul>
          {countries.map(country => {
            return (
              <a href={`/${country.name.official}`} key={country.flag}>
                {country.name.common} <br />
              </a>
            );
          })}
        </ul>
        <CountryDetail country={this.props.location.pathname} {...this.props} />
      </section>
    );
  }
}

export default CountriesList;
