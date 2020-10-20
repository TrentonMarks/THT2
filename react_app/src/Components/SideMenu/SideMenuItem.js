import React from 'react'; // import React
import SideSubmenuItem from "./SideSubmenuItem"; // import component

export default class SideMenuItem extends React.Component {
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
        <ul className={hoverClass}>
          {
            data.subtree !== null &&
            data.subtree !== undefined &&
            data.subtree.length > 0
            ?
              data.subtree.map(item => <SideSubmenuItem {...item} key={item.link.weight}/>)
            :
              null
          }
        </ul>
      </li>
    );
  }

}
