import React, {Component} from "react";

class Header extends Component {
  render(){
      return (
        <header id="MainHeader">
          <h1 onClick={() => this.props.seeCategories()}>Vocabulary</h1>
        </header>
    );
  }
}

export default Header;
