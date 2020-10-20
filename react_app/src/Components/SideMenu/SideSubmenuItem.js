import React from 'react'; // import React
import SideSubmenuItem2 from "./SideSubmenuItem2"; // import component

export default class SideSubmenuItem extends React.Component {

  render() {
    let data = this.props;

    return (
      <li>
        <a href={data.link.url} data-drupal-link-system-path={"node/"+data.link.route_parameters.node}>
          {data.link.title}
        </a>
        {
          data.has_children
          ?
          <ul>
            {data.subtree.map(item => <SideSubmenuItem2 {...item} key={item.link.weight}/>)}
          </ul>
          :
          null
        }
      </li>
    );
  }

}
