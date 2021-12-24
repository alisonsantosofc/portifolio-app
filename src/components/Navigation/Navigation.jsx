import React from 'react';
import { NavLink } from 'react-router-dom';

import avatar from '../../img/avatar.jpg';

import './Navigation.scss';

function Navigation() {
  return (
    <div className="navigation-style">
      <div className="avatar">
        <img src={avatar} alt="Avatar" />
      </div>

      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/home" activeclassname="active">
            Ínicio
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/about" activeclassname="active">
            Sobre
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/resume" activeclassname="active">
            Resumo
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/projects" activeclassname="active">
            Projetos
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/contact" activeclassname="active">
            Contato
          </NavLink>
        </li>
      </ul>
      <footer className="nav-footer">
        <p>&copy; 2022 Developed by Alison Santos</p>
      </footer>
    </div>
  );
};

export default Navigation;
