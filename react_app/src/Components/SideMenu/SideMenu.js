import React from 'react'; // import React

export default class SideMenu extends React.Component {
  componentDidMount(){
    document.addEventListener('click', this.handleClick, false);
  }
  componentWillUnmount(){
    document.removeEventListener('click', this.handleClick, false);
  }
  handleClick = (event) => {
    const sideMenuOpen = this.props.sideMenuOpen;
    const sideMenuClicked = this.node.contains(event.target);

    if (!sideMenuOpen || sideMenuClicked || event.target.id === 'toggle-icon' || event.target.id === 'toggle-icon-icon' || event.target.id === 'toggle-icon-label') {
      // If the side menu is closed OR the click was on the side menu, return and do nothing
      return;
    } else {
      // If side menu is opened AND the click was outsite the side menu, close the side menu
      this.props.closeSideMenu();
    }
  }
  render(){
    const sideMenuOpen = this.props.sideMenuOpen;
    let className;
    sideMenuOpen ? className = "side-menu open" : className = "side-menu";

    return (
      <div className={className} ref={node => this.node = node}>
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
