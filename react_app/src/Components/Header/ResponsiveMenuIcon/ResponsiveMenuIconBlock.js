import React from 'react'; // import React

export default class ResponsiveMenuIconBlock extends React.Component {

  render(){
    let toggleSideMenu = this.props.toggleSideMenu;
    return (
      <div id="block-responsivemenumobileicon" className="contextual-region responsive-menu-toggle-wrapper responsive-menu-toggle block-responsive-menu block-responsivemenumobileicon">
        <button id="toggle-icon" onClick={toggleSideMenu} className="toggle responsive-menu-toggle-icon" title="Menu">
          <span className="icon"></span>
          <span className="label">Menu</span>
        </button>
      </div>
    );
  }

}
