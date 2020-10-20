import React from 'react'; // import React
import SideSubmenuItem from "./SideSubmenuItem"; // import component

export default class SideMenuItem extends React.Component {

  render() {
    let data = this.props;

    return (
      <li>
        <a href={data.link.url} data-drupal-link-system-path={"node/"+data.link.route_parameters.node}>
          {data.link.title}
        </a>
        <ul>
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
