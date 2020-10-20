import React from 'react'; // import React
import SideMenuItem from "./SideMenuItem"; // import component

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
    let data = this.props.mainMenu;

    return (
      <div className={className} ref={node => this.node = node}>
        <div className="side-menu-title">
          <span>Menu</span>
        </div>
        <ul>
          {
            data !== null &&
            data !== undefined &&
            data.length > 0
            ?
            data.map(item => <SideMenuItem {...item} key={item.link.weight}/>)
            :
            null
          }
        </ul>
      </div>
    );
  }

}
