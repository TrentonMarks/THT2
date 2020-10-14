import React from 'react'; // import React

export default class SideMenu extends React.Component {

  render(){
    let sideMenuOpen = this.props.sideMenuOpen;
    let className;
    sideMenuOpen ? className = "side-menu open" : className = "side-menu";

    return (
      <div className={className}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">News</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Areas Served</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
      </div>
    );
  }

}
