// Import React, Stylesheets, Components, Config
import React, { Component } from 'react'; // React
import './App.css'; // Stylesheet
import SideMenu from './Components/SideMenu/SideMenu'; // Component
import TopTopNavRegion from './Components/TopTopNav/TopTopNavRegion'; // Component
import HeaderRegion from './Components/Header/HeaderRegion'; // Component
import HeroRegion from './Components/Hero/HeroRegion'; // Component
import MainSection from './Components/Main/MainSection'; // Component
import FooterRegion from './Components/Footer/FooterRegion'; // Component
import config from './config'; // Config

// URLs To Json APIs
const API_ROOT = `${config.base}jsonapi/`; // JSON API Root
const TOPTOPNAV_URL = `${config.base}entity/menu/top-top-nav/tree`; // to Top Top Nav
const HEADERPHONE_URL = `${API_ROOT}block_content/basic/b7ebc399-32a4-44f2-aebd-6562dd421e8f`; // to Header Phone
const MAINMENU_URL = `${config.base}entity/menu/main/tree`; // to Main Menu
const HERO_URL = `${API_ROOT}block_content/basic/5337744e-e178-4b48-9fbe-e2ab303bc93a`; // to Hero
const CALLOUTS_URL = `${API_ROOT}block_content/basic/cd26ab3d-f6d8-4db6-9f8f-82d90a2fae99`; // to Callouts
const PAGE_URL = `${API_ROOT}node/page`; // to Basic Page
const SIDEBAR_URL = `${API_ROOT}block_content/basic/3b9e8b23-c80d-4140-8fa2-35a17df0e146`; // to Sidebar
const WEBFORM_URL = `${API_ROOT}webform/webform/58b178d4-7868-49d2-aeae-1cc269f2fc90`; // to Webform
const FOOTER_URL = `${API_ROOT}block_content/basic/2e5e5c9c-37f0-4209-9c0d-e844c9aa6d42`; // to Footer
const COPYRIGHT_URL = `${API_ROOT}block_content/basic/edcd4623-8148-4188-a7f7-78c44e627f56`; // to Copyright

const HOME_URL = 'http://localhost:3000/home-page';
const CONTACTUS_URL = 'http://localhost:3000/contact-us';
if (window.location.href === HOME_URL) {
  window.location = 'http://localhost:3000';
}

class App extends Component{
  constructor(){
    super();
    // Set State
    this.state = {
      sideMenuOpen: false,
      isHomePage: null,
      isContactUsPage: false,
      topTopNav: null,
      headerPhone: null,
      mainMenu: null,
      hero: null,
      callouts: null,
      page: null,
      sidebar: null,
      webform: null,
      footer: null,
      copyright: null
    };
    // Load Methods
    this.loadTopTopNav = this.loadTopTopNav.bind(this);
    this.loadHeaderPhone = this.loadHeaderPhone.bind(this);
    this.loadMainMenu = this.loadMainMenu.bind(this);
    this.loadHero = this.loadHero.bind(this);
    this.loadCallouts = this.loadCallouts.bind(this);
    this.loadPage = this.loadPage.bind(this);
    this.loadSidebar = this.loadSidebar.bind(this);
    this.loadWebform = this.loadWebform.bind(this);
    this.loadFooter = this.loadFooter.bind(this);
    this.loadCopyright = this.loadCopyright.bind(this);
    // Update Methods
    this.updatetopTopNav = this.updatetopTopNav.bind(this);
    this.updateHeaderPhone = this.updateHeaderPhone.bind(this);
    this.updateMainMenu = this.updateMainMenu.bind(this);
    this.updateHero = this.updateHero.bind(this);
    this.updateCallouts = this.updateCallouts.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.updateSidebar = this.updateSidebar.bind(this);
    this.updateWebform = this.updateWebform.bind(this);
    this.updateFooter = this.updateFooter.bind(this);
    this.updateCopyright = this.updateCopyright.bind(this);
    // Misc Methods
    // this.toggleSideMenu = this.toggleSideMenu.bind(this);
    this.checkIfHomePage = this.checkIfHomePage.bind(this);
    this.checkIfContactUsPage = this.checkIfContactUsPage.bind(this);
  }
  componentDidMount(){
    // Load Components.
    this.loadTopTopNav();
    this.loadHeaderPhone();
    this.loadMainMenu();
    this.loadPage();
    this.loadSidebar();
    this.loadWebform();
    this.loadFooter();
    this.loadCopyright();
    this.loadHero();
    this.loadCallouts();
    this.checkIfHomePage();
    this.checkIfContactUsPage();
  }
  toggleSideMenu = () => {
    this.setState({ sideMenuOpen: !this.state.sideMenuOpen });
  }
  loadTopTopNav(){
    // Fetch Top Top Nav.
    fetch(TOPTOPNAV_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updatetopTopNav(data))
      .catch(error => console.log('Fetching Top Top Nav Failed', error));
  }
  updatetopTopNav(responseData){
    this.setState({ topTopNav: responseData });
  }
  loadHeaderPhone(){
    // Fetch HeaderPhone.
    fetch(HEADERPHONE_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateHeaderPhone(data))
      .catch(error => console.log('Fetching Header Phone Failed', error));
  }
  updateHeaderPhone(responseData){
    this.setState({ headerPhone: responseData.data });
  }
  loadMainMenu(){
    // Fetch Main Menu.
    fetch(MAINMENU_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateMainMenu(data))
      .catch(error => console.log('Fetching Main Menu Failed', error));
  }
  updateMainMenu(responseData){
    this.setState({ mainMenu: responseData });
  }
  loadHero(){
    // Fetch Hero.
    fetch(HERO_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateHero(data))
      .catch(error => console.log('Fetching Hero Failed', error));
  }
  updateHero(responseData){
    this.setState({ hero: responseData.data });
  }
  loadCallouts(){
    // Fetch Callouts.
    fetch(CALLOUTS_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateCallouts(data))
      .catch(error => console.log('Fetching Callouts Failed', error));
  }
  updateCallouts(responseData){
    this.setState({ callouts: responseData.data });
  }
  loadPage(){
    // Fetch Page Content.
    fetch(PAGE_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updatePage(data))
      .catch(error => console.log('Fetching Page Content Failed', error));
  }
  updatePage(responseData){
    this.setState({ page: responseData.data });
  }
  loadSidebar(){
    // Fetch Sidebar.
    fetch(SIDEBAR_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateSidebar(data))
      .catch(error => console.log('Fetching Sidebar Failed', error));
  }
  updateSidebar(responseData){
    this.setState({ sidebar: responseData.data });
  }
  loadWebform(){
    // Fetch Webform.
    fetch(WEBFORM_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateWebform(data))
      .catch(error => console.log('Fetching Webform Failed', error));
  }
  updateWebform(responseData){
    this.setState({ webform: responseData.data });
  }
  loadFooter(){
    // Fetch Footer.
    fetch(FOOTER_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateFooter(data))
      .catch(error => console.log('Fetching Footer Failed', error));
  }
  updateFooter(responseData){
    this.setState({ footer: responseData.data });
  }
  loadCopyright(){
    // Fetch Copyright.
    fetch(COPYRIGHT_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateCopyright(data))
      .catch(error => console.log('Fetching Copyright Failed', error));
  }
  updateCopyright(responseData){
    this.setState({ copyright: responseData.data });
  }
  checkIfHomePage(){
    if (window.location.href !== 'http://localhost:3000' &&
        window.location.href !== 'http://localhost:3000/'&&
        window.location.href !== HOME_URL) {
          this.setState({ isHomePage: false });
    } else {
      this.setState({ isHomePage: true });
    }
  }
  checkIfContactUsPage(){
    if (window.location.href === CONTACTUS_URL) {
      this.setState({ isContactUsPage: true });
    }
  }

  render(){

    return (
      <>
        <SideMenu
          sideMenuOpen={this.state.sideMenuOpen}
        />
        <div id="mm-0" className="mm-page mm-slideout main-page">
          <div className="responsive-menu-page-wrapper">
            <div className="layout-container">
              <TopTopNavRegion
                topTopNav={this.state.topTopNav}
                headerPhone={this.state.headerPhone}
              />
              <HeaderRegion
                mainMenu={this.state.mainMenu}
                toggleSideMenu={this.toggleSideMenu}
              />
              {/* If Home Page. */
                this.state.isHomePage
                ?
                /* Render Hero and Callouts */
                <div>
                  <HeroRegion
                    hero={this.state.hero}
                  />
                  <MainSection
                    callouts={this.state.callouts}
                    page={this.state.page}
                    sidebar={this.state.sidebar}
                    webform={this.state.webform}
                    isHomePage={this.state.isHomePage}
                    isContactUsPage={this.state.isContactUsPage}
                  />
                </div>
                :
                <MainSection
                  page={this.state.page}
                  sidebar={this.state.sidebar}
                  webform={this.state.webform}
                  isContactUsPage={this.state.isContactUsPage}
                />
              }
              <FooterRegion
                footer={this.state.footer}
                copyright={this.state.copyright}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
