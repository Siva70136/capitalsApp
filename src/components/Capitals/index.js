import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  onUpdate = event => {
    const city = event.target.value
    const filterId = countryAndCapitalsList.filter(each => each.id === city)
    console.log(filterId)
    this.setState({
      country: filterId[0].country,
    })
  }

  render() {
    const {country} = this.state
    return (
      <div className="main">
        <div className="box">
          <h1 className="head">Countries And Capitals</h1>
          <div className="input-container">
            <select className="select" onChange={this.onUpdate}>
              <option className="city" value={countryAndCapitalsList[0].id}>
                {countryAndCapitalsList[0].capitalDisplayText}
              </option>
              <option className="city" value={countryAndCapitalsList[1].id}>
                {countryAndCapitalsList[1].capitalDisplayText}
              </option>
              <option className="city" value={countryAndCapitalsList[2].id}>
                {countryAndCapitalsList[2].capitalDisplayText}
              </option>
              <option className="city" value={countryAndCapitalsList[3].id}>
                {countryAndCapitalsList[3].capitalDisplayText}
              </option>
              <option className="city" value={countryAndCapitalsList[4].id}>
                {countryAndCapitalsList[4].capitalDisplayText}
              </option>
            </select>
            <span className="count">is capital of which country?</span>
          </div>
          <p className="capital">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
