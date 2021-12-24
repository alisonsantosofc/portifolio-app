import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar-style">
      <Navigation />
    </div>
  );
};

export default Sidebar;
