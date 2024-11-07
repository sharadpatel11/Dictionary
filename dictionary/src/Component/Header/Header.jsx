import React from 'react';
import "./Header.css";

export class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A word was submitted: ' + this.state.value);
  }

  render() {
    return (
      <div className="header">
        <div className="heading">
            <h1>Discover Words.</h1>
            <h1>Unlock Meanings.</h1>
        </div>
        <div className="info">
            <p>Need a definition? Look it up. Stumbled across a new word?</p>
            <p>We’ve got you covered. Search now and expand your vocabulary!</p>
        </div>
        <div className="search">
            <img className="searchImg" src="/Assets/search.png" alt="Dictionary Logo" width="22.73px" height="23.65px" opacity= "0px" />
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder='search' value={this.state.value} onChange={this.handleChange} required/>
            </form>
        </div>
        <div className="extra">
          <img src="/Assets/extra.png" alt="Description" />
        </div>
      </div>
    )
  }
}

export default Header
