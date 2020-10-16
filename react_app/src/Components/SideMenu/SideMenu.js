import React from 'react'; // import React

export default class SideMenu extends React.Component {

  render(){
    let sideMenuOpen = this.props.sideMenuOpen;
    let className;
    sideMenuOpen ? className = "side-menu open" : className = "side-menu";

    return (
      <div className={className}>
        <div className="side-menu-title">
          <span>Menu</span>
        </div>
        <ul>
          <li><a href="/service-1">Service 1</a></li>
          <li><a href="/service-2">Service 2</a></li>
          <li><a href="/service-3">Service 3</a></li>
          <li><a href="/service-4">Service 4</a></li>
          <li><a href="/service-5">Service 5</a></li>
        </ul>
      </div>
    );
  }

}
