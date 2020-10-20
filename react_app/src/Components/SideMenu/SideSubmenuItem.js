import React from 'react'; // import React
import SideSubmenuItem2 from "./SideSubmenuItem2"; // import component

export default class SideSubmenuItem extends React.Component {
  constructor(){
    super();
    this.state = {
      isHovered: false
    };
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(){
    this.setState({ isHovered: !this.state.isHovered });
  }

  render() {
    let data = this.props;
    let hoverClass = this.state.isHovered ? "show" : "hidden";

    return (
      <li onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <a href={data.link.url} data-drupal-link-system-path={"node/"+data.link.route_parameters.node}>
          {data.link.title}
        </a>
        {
          data.has_children
          ?
          <ul className={hoverClass}>
            {data.subtree.map(item => <SideSubmenuItem2 {...item} key={item.link.weight}/>)}
          </ul>
          :
          null
        }
      </li>
    );
  }

}
