import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <img src="https://cdn.prod.website-files.com/609fcf792d95d5535b5cf0ad/62bab7a84326dc974b62359f_logotype-white-text.svg" alt="CleverDev Software" />
        </div>

        {/* Navigation Menu */}
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item dropdown">
              <a href="#services">Services</a>
              <ul className="dropdown-menu">
                <li><a href="">Custom Development</a></li>
                <li><a href="#app-dev">App Development</a></li>
                <li><a href="#custom-dev">Custom Development</a></li>
                <li><a href="#app-dev">App Development</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#solutions">Solutions</a>
              <ul className="dropdown-menu">
                <li><a href="#erp">ERP Solutions</a></li>
                <li><a href="#crm">CRM Solutions</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#technologies">Technologies</a>
              <ul className="dropdown-menu">
                <li><a href="#ai">AI</a></li>
                <li><a href="#blockchain">Blockchain</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#industries">Industries</a>
              <ul className="dropdown-menu">
                <li><a href="#finance">Finance</a></li>
                <li><a href="#healthcare">Healthcare</a></li>
              </ul>
            </li>
            <li className="nav-item"><a href="#case-studies">Case Studies</a></li>
            <li className="nav-item"><a href="#pricing">Pricing</a></li>
            <li className="nav-item dropdown">
              <a href="#about">About</a>
              <ul className="dropdown-menu">
                <li><a href="#company">Company</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* Actions Section */}
        <div className="header-actions">
          <button className="search-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
