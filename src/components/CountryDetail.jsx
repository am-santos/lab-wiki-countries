import React, { Component } from 'react';

class CountryDetail extends Component {
  render() {
    const countryName = this.props.country.slice(1);
    const countries = [...this.props.countries];
    return (
      <article>
        {countries
          .filter(country => {
            return country.name.official === countryName;
          })
          .map(country => {
            return (
              <div key={country.flag} className="country-details">
                <img
                  src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                  alt=""
                />
                <h1>{country.name.official}</h1>
                <table>
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Capital</strong>
                      </td>
                      <td>{country.capital}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Area</strong>
                      </td>
                      <td>
                        {country.area} km<sup>2</sup>
                      </td>
                    </tr>
                    <tr>
                      <td className="left-column">
                        <strong>Borders</strong>
                      </td>
                      <td>
                        <ul className="table-list">
                          {countries
                            .filter(auxCountry =>
                              country.borders.includes(auxCountry.cca3)
                            )
                            .map(finalCountry => {
                              return (
                                <li key={finalCountry.flag}>
                                  {finalCountry.name.official}
                                </li>
                              );
                            })}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
      </article>
    );
  }
}

export default CountryDetail;
