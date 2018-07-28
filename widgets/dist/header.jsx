import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;

  }



  render() {
    return (
      <li onClick={() => this.props.onTabChosen(this.props.tabId)}>
        <h1>{this.title}</h1>
      </li>
    );
  }
}

export default Header;
