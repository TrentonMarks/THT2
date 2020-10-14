import React from 'react'; // import React

export default class CopyrightBlock extends React.Component {

  render() {
    // let { data } = this.props;
    let date = new Date();

    return (
      <div id="block-copyright--2" className="contextual-region block-block-content block-copyright--2">
        {/*<div
          className="basic__body"
          dangerouslySetInnerHTML={{__html: data.attributes.body.value}}
        />*/}
        <div className="basic__body">
          <p>Copyright © {date.getFullYear()} TH_base2 Theme | Starter Template | Powered by Turtlehut™</p>
        </div>
      </div>
    );
  }

}
