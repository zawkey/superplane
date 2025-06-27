import React from 'react';
import semaphoreLogo from "../images/semaphore-logo-sign-black.svg";
import icnProjectNav from "../images/icn-project-nav.svg";
import icnMenu from "../images/icn-menu.svg";
import profileImg from "../images/profile.jpg";
const Navigation = ({ isOrgView = false }) => {
  const [isFlowMenuOpen, setIsFlowMenuOpen] = React.useState(false);
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = React.useState(false);


  const toggleFlowMenu = () => {
    setIsFlowMenuOpen(!isFlowMenuOpen);
  };

  const toggleOrgDropdown = () => {
    setIsOrgDropdownOpen(!isOrgDropdownOpen);
  };

  return (
    <div class="header" id="js-header">
        
        <div class="flex items-center justify-between w-100 ph2 ph3-ns pv2">
            <div class="flex items-center">
                 
                <a href="#" className="link flex items-center flex-shrink-0">
                    <img src={semaphoreLogo} alt="Semaphore Logo" className="h-6" width={26} />
                    <strong className="ml2 f3 black-90">SuperPlane</strong>
                </a>
               <nav className={isOrgView ? "hidden" : ""} aria-label="Breadcrumb" class="ml3 bl b--black-10 pl3">
                  <ol role="list" class="flex items-center">
                      
                      <li>
                             <a href="#" class="dark-indigo">My Flows</a>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block px-2 relative">/</span>
                        <a href="#" class="my-flow b flex items-center" onClick={toggleFlowMenu}><span>Flow 1</span> <i className="material-icons" style={{ fontSize: '16px' }}>expand_more</i></a>
                        <div className={"projects-menu-results absolute pa3 bg-white top-[48px] pr3 nr3 pb3 " + (isFlowMenuOpen ? "block" : "hidden")} onClick={(e) => e.stopPropagation()}>
                            <input className='w-100 pa2 mb2 form-control' type="text" placeholder="Search flows"/>
                            <p className="f7 mb0 gray">Keyboard shortcut: "/"</p>
                            
                            <div className="f5 b mt3 mb1 pt2 bt b--black-10">Starred</div>
                            
                            <ul className="list pl0 mb0">
                                <li>
                                    <a href="project.html">app-design</a>
                                    <div className="projects-menu-unstar"></div>
                                </li>
                                <li>
                                    <a href="project.html">coding-interview-university</a>
                                    <div className="projects-menu-unstar"></div>
                                </li>
                                <li>
                                    <a href="project.html">dispatch</a>
                                    <div className="projects-menu-unstar"></div>
                                </li>
                            </ul>
                            
                            <div className="f5 b mt3 mb1 pt2 bt b--black-10">My flows</div>
                            <ul className="list pl0 mb0">
                                <li>
                                    <a className='bg-lightest-blue' href="project.html">Flow 1</a>
                                    <div className="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">Flow 2</a>
                                    <div className="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">nndl.github.io</a>
                                    <div className="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">free-for-dev</a>
                                    <div className="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">dnSpy</a>
                                    <div className="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">computer-science</a>
                                    <div className="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">nndl.github.io</a>
                                    <div className="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">free-for-dev</a>
                                    <div className="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">dnSpy</a>
                                    <div className="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">computer-science</a>
                                    <div className="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">nndl.github.io</a>
                                    <div className="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">free-for-dev</a>
                                    <div className="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">dnSpy</a>
                                    <div className="projects-menu-star"></div>
                                </li>
                            </ul>
                           
                        </div>
                       
                      </li>
                  </ol>
              </nav>
                <div class="dn bl b--black-15 pl2 pl3-m ml2 ml3-m">
                    <div class="b pointer flex items-center hover-bg-washed-brown ph2 br3 nh1 pv1 js-projects-menu-trigger">
                        <img src="assets/images/icn-project-nav.svg" class="dn db-ns mr2"/>
                        My projects 
                    </div>
                </div>
                
                 
                <div id="projectsMenu" clanssName="dn">
                    <div class="project-menu ph3 pt3">
                        <div class="bg-white pb2">
                            <input type="text" class="form-control w-100" placeholder="Jump to…"/>
                        </div>
                        
                        <div class="projects-menu-results pr3 nr3 pb3">
                            <p class="f7 mb0 gray">Keyboard shortcut: "/"</p>
                            
                            <div class="f5 b mt3 mb1 pt2 bt b--black-10">Starred</div>
                            
                            <ul class="list pl0 mb0">
                                <li>
                                    <a href="project.html">app-design</a>
                                    <div class="projects-menu-unstar"></div>
                                </li>
                                <li>
                                    <a href="project.html">coding-interview-university</a>
                                    <div class="projects-menu-unstar"></div>
                                </li>
                                <li>
                                    <a href="project.html">dispatch</a>
                                    <div class="projects-menu-unstar"></div>
                                </li>
                            </ul>
                            
                            <div className="f5 b mt3 mb1 pt2 bt b--black-10">My projects</div>
                            <ul className="list pl0 mb0">
                                <li>
                                    <a href="project.html">magento2</a>
                                    <div className="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">computer-science</a>
                                    <div className="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">nndl.github.io</a>
                                    <div class="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">free-for-dev</a>
                                    <div class="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">dnSpy</a>
                                    <div class="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">computer-science</a>
                                    <div class="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">nndl.github.io</a>
                                    <div class="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">free-for-dev</a>
                                    <div class="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">dnSpy</a>
                                    <div class="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">computer-science</a>
                                    <div class="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">nndl.github.io</a>
                                    <div class="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">free-for-dev</a>
                                    <div class="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="project.html">dnSpy</a>
                                    <div class="projects-menu-star"></div>
                                </li>
                            </ul>
                            
                            <div class="f5 b mt3 mb1 pt2 bt b--black-10">Dashboards</div>
                            <ul class="list pl0 mb0">
                                <li>
                                    <a href="dashboard.html">virtual-environments</a>
                                    <div class="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="dashboard.html">destiny</a>
                                    <div class="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="dashboard.html">vuejs</a>
                                    <div class="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="dashboard.html">tips_for_interview</a>
                                    <div class="projects-menu-star"></div>
                                </li>
                                <li>
                                    <a href="dashboard.html">selected_hovers</a>
                                    <div class="projects-menu-star"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="dn flex-shrink-0 bl b--black-10 pv1 pv0-ns pl2 pl3-m ml2 ml3-m">
                    <a href="new-choose-type.html" class="link dark-gray b pointer flex items-center hover-bg-washed-brown ph2 br3 nh1 pv1">
                        <i className="material-icons" style={{ fontSize: '16px' }}>add</i>
                        <span class="ml2">Create new</span>
                    </a>
                </div>
            </div>
            
            <div class="flex items-center flex-shrink-0">
              <div class="ph1 ph2">
                    <div class="flex flex-shrink-0 pv1 ph1 ph2-ns br3 pointer hover-bg-washed-brown js-dropdown-color-trigger" data-template="helpMenu">
                        <i className="material-icons" style={{ fontSize: '26px' }}>support</i>
                        <span class="dn ml2 b">Help</span>
                    </div>
                </div>
                 
                <div class="dn">
                    <div class="flex flex-shrink-0 pv1 ph1 ph2-ns br3 pointer hover-bg-washed-brown js-dropdown-color-trigger" data-template="feedbackMenu">
                        <i className="material-icons">sentiment_very_satisfied</i>
                        <span class="ml2 b">Feedback</span>
                    </div>
                </div>
                
                 
                
                
                 
                
                
                 
                 <div className={"pl2 pl3-m bl b--black-15 pointer flex-shrink-0 pr2 " + (isOrgView ? "hidden" : "")} data-micromodal-trigger="js-org-sidebar">
                
                    <button className="pointer relative hover-bg-washed-brown pv1 ph2 br3 flex items-center js-dropdown-menu-trigger btn-link f4 mx-2" data-template="roleSelector" aria-expanded="false" onClick={toggleOrgDropdown}>
                        <span>Zorana's org</span>
                        <span className="ml1 material-symbols-outlined" style={{ fontSize: '18px' }}>expand_more</span>
                    </button>
                    <div className={isOrgDropdownOpen ? "block" : "hidden"}>
                      <div className="dropdown-menu absolute bg-gray white-80 br3">
                        <a href="#" className='block pa2 hover-bg-black-40'>Organization 1</a>
                        <a href="#" className='block pa2 hover-bg-black-40'>Organization 2</a>
                        <a href="#" className='block pa2 hover-bg-black-40'>Organization 3</a>
                        <a href="#" className='block pa2 hover-bg-black-40'>Manage Organizations</a>
                      </div>
                    </div>
                </div>
                <div class="flex-shrink-0 pa1 ma1 pointer bg-animate hover-bg-washed-brown br-100 js-dropdown-color-trigger" data-template="profileMenu">
                    <img src={profileImg} alt="Jeff Jones" width="24" height="24" class="f7 db br-100 ba b--black-50"/>
                </div>
               
            </div>

    </div>
    </div>

  );
};

export default Navigation;