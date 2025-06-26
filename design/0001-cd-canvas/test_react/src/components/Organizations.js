import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './navigation';

const Organizations = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const organizations = [
    {
      id: 1,
      name: 'Zoranas Organization',
      description: 'Main organization',
      isCurrent: true
    },
    {
      id: 2,
      name: 'Test Organization',
      description: 'Test organization',
      isCurrent: false
    },
    {
      id: 3,
      name: 'Another Org',
      description: 'Another organization',
      isCurrent: false
    }
  ];

  const filteredOrganizations = organizations.filter(org => 
    org.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <Navigation/>
    
    <div className="flex justify-center pv4">
      <div className="bg-near-white w-100 mw8 pa4 br3 ba b--black-10">
        <p className="mb4 f5">
          Hey Zorana! How's it going?<br />
          <span className="gray">Select one of your organizations to continue:</span>
        </p>
        <div className="flex flex-wrap items-start">
          {filteredOrganizations.map((org) => (
            <div
              key={org.id}
              className="org-card bg-white br2 ba b--black-10 flex flex-column justify-between mr3 mb3 pointer grow"
              style={{ width: '200px' }}
              onClick={() => navigate('/workflow')}
            >
              <div className="pa3">
                <div className="org-avatar bg-dark-gray white br-100 flex items-center justify-center mb3" style={{ width: '32px', height: '32px' }}>
                  {org.name.charAt(0).toUpperCase()}
                </div>
                <div className="b mb1 dark-gray">{org.name}</div>
                <div className="gray f7">{org.name.toLowerCase().replace(/ /g, '')}.example.com</div>
              </div>
            </div>
          ))}

          <div
            className="org-card bg-green white br2 flex flex-column justify-center items-start pa3 pointer grow"
            style={{ width: '200px' }}
            onClick={() => alert('Create new organization')}
          >
            <div className="b mb2">+ Create new</div>
            <div className="f7">Add new organization</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Organizations;
