import React from 'react'; // import React

export default class ResponsiveMenuIconBlock extends React.Component {

  render(){
    let openSideMenu = this.props.openSideMenu;
    return (
      <div id="block-responsivemenumobileicon" className="contextual-region responsive-menu-toggle-wrapper responsive-menu-toggle block-responsive-menu block-responsivemenumobileicon">
        <button id="toggle-icon" onClick={openSideMenu} className="toggle responsive-menu-toggle-icon" title="Menu">
          <span id="toggle-icon-icon" className="icon"></span>
          <span id="toggle-icon-label" className="label">Menu</span>
        </button>
      </div>
    );
  }

}
