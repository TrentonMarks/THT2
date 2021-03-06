import React from 'react'; // import React
import ResponsiveMenuIconBlock from "./ResponsiveMenuIcon/ResponsiveMenuIconBlock"; // import component
import HeaderLogoBlock from "./HeaderLogo/HeaderLogoBlock"; // import component
import HeaderPhoneBlock from "./HeaderPhone/HeaderPhoneBlock"; // import component
import HorizontalMenuBlock from "./HorizontalMenu/HorizontalMenuBlock"; // import component

export default class HeaderRegion extends React.Component {

  render() {
    let mainMenu = this.props.mainMenu;
    let openSideMenu = this.props.openSideMenu;

    return (
      <header id="header">
        <div className="container">
          <div id="header-region">
            <div>
              <ResponsiveMenuIconBlock openSideMenu={openSideMenu} />
              <HeaderLogoBlock />
              <HeaderPhoneBlock />
            </div>
          </div>
          <nav id="service-menu" className="menu">
            <div className="container">
              <div>
                {
                  mainMenu !== null &&
                  mainMenu !== undefined
                  ?
                  <HorizontalMenuBlock data={mainMenu} />
                  :
                  null
                }
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }

}
