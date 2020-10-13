import React from 'react'; // import React
import ContactUsPageBlock from "./ContactUsPageBlock"; // import component


export default class BasicPageBlock extends React.Component {

  render() {
    let data = this.props.page;
    let isContactUsPage = this.props.isContactUsPage;
    let pageBody, pageTitle, currentPath;
    for (let i = 0; i < data.length; i++) {
      if (data[i].attributes.path.alias === window.location.pathname) {
        pageTitle = data[i].attributes.title;
        pageBody = data[i].attributes.body.value;
        currentPath = data[i].attributes.path.alias;
      } else if (window.location.pathname === '/') {
        pageTitle = data[0].attributes.title;
        pageBody = data[0].attributes.body.value;
        currentPath = data[0].attributes.path.alias;
      }
    }

    return (
      <div>
      {isContactUsPage
        ?
        <ContactUsPageBlock />
        :
        <div><div id="block-th-base2-page-title" className="block-system block-th-base2-content">
          <h1>
            <span property="schema:name" dangerouslySetInnerHTML={{__html: pageTitle}} ></span>
          </h1>
        </div>
        <div id="block-th-base2-content" className="block-system block-th-base2-content">
          <article data-history-node-id="8" className="contextual-region node" about={currentPath} typeof="schema:WebPage">
            <div className="content">
              <div property="schema:text" className="page__body">
                <div dangerouslySetInnerHTML={{__html: pageBody}} />
              </div>
            </div>
          </article>
        </div></div>
      }

      </div>
    );
  }

}
