import React from 'react'; // import React
import BasicPageBlock from "./BasicPageBlock"; // import component

export default class BasicPageRegion extends React.Component {

  render() {
    let page = this.props.page;
    let isHomePage = this.props.isHomePage;
    let isContactUsPage = this.props.isContactUsPage;

    return (
      <section id="content">
        <div id="content-area">
          {
            page !== null &&
            page !== undefined
            ?
            <BasicPageBlock
              page={page}
              isHomePage={isHomePage}
              isContactUsPage={isContactUsPage}
            />
            :
            null
          }
        </div>
      </section>
    );
  }

}
