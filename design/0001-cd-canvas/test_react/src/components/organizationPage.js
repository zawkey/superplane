// src/pages/OrganizationPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from './navigation';

const OrganizationPage = () => {
  const { orgId } = useParams();
  const [activeTab, setActiveTab] = useState('canvases');

  // Mock organization data - in a real app, this would come from an API
  const organization = {
    id: orgId,
    name: "Zorana's Organization",
    description: "Main organization"
  };
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'canvases':
        return <div className="pa3">Canvases content goes here</div>;
      case 'members':
        return <div className="pa3">Members content goes here</div>;
      case 'groups':
        return <div className="pa3">Groups content goes here</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navigation isOrgView={false} />
      
      <div className="mt5 ph3">
        <div className="mb4">
          <h1 className="f2 mb1">{organization.name}</h1>
          <p className="hidden gray">{organization.description}</p>
        </div>

        <div className="bb b--black-10">
        <div class="mb4">
            <nav class="tabs">

            <a href="/?dashboard=my-work" class="tab tab--active">
                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.5A3.5 3.5 0 014.5 1h7A3.5 3.5 0 0115 4.5v7a3.5 3.5 0 01-3.5 3.5h-7A3.5 3.5 0 011 11.5v-7zm3.5-2.1a2.1 2.1 0 00-2.1 2.1v7a2.1 2.1 0 002.1 2.1h7a2.1 2.1 0 002.1-2.1v-7a2.1 2.1 0 00-2.1-2.1h-7zm1.675 4.66a1.15 1.15 0 100-2.3 1.15 1.15 0 000 2.3zm4.806-1.15a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0zM4.003 8v.25a3.7 3.7 0 003.7 3.7h.625a3.7 3.7 0 003.7-3.7V8h-1.4v.25a2.3 2.3 0 01-2.3 2.3h-.625a2.3 2.3 0 01-2.3-2.3V8h-1.4z"></path></svg>
                <span>My Work</span>
            </a>
            <a href="/?dashboard=everyones-activity" class="tab ">
                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.875a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-2.9 1.5a2.9 2.9 0 115.8 0 2.9 2.9 0 01-5.8 0zm-4.1 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-2.9 1.5a2.9 2.9 0 115.8 0 2.9 2.9 0 01-5.8 0zm7.225 3a.8.8 0 01.8-.8h4.156a.8.8 0 01.8.8v4.5h1.4v-4.5a2.2 2.2 0 00-2.2-2.2H9.625a2.2 2.2 0 00-2.2 2.2.8.8 0 01-.8.8H2.219a2.2 2.2 0 00-2.2 2.2v1.5h1.4v-1.5a.8.8 0 01.8-.8h4.406a2.2 2.2 0 002.2-2.2z"></path></svg>
                <span>Everyone's Work</span>
            </a>
            <a href="/?dashboard=starred" class="tab ">
                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.96 2.254c.374-1.075 1.894-1.075 2.267 0l1.08 3.106 3.288.067c1.137.023 1.607 1.469.7 2.156l-2.62 1.987.952 3.147c.33 1.09-.9 1.983-1.834 1.333l-2.7-1.878-2.699 1.878c-.933.65-2.163-.244-1.834-1.333l.953-3.147-2.62-1.987c-.907-.687-.438-2.133.7-2.156L5.88 5.36l1.08-3.106zm1.134 1.003l-.937 2.694a1.2 1.2 0 01-1.109.806l-2.852.058L5.47 8.538c.4.303.57.824.424 1.304l-.826 2.73 2.341-1.63a1.2 1.2 0 011.371 0l2.341 1.63-.826-2.73a1.2 1.2 0 01.424-1.304l2.273-1.723-2.852-.058A1.2 1.2 0 019.03 5.95l-.936-2.694z"></path></svg>
                <span>My Starred Projects</span>
            </a>

            </nav>
          </div>  
          <nav className="flex">
            {['canvases', 'members', 'groups'].map((tab) => (
              <a href='#'
                key={tab}
                className={`tab ${activeTab === tab ? 'tab--active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                <i className="material-symbols-outlined mr2">{tab === 'canvases' ? 'automation' : tab === 'members' ? 'person' : "groups"}</i>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </a>
            ))}
          </nav>
        </div>

        <div className="bg-white ba b--black-10">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default OrganizationPage;