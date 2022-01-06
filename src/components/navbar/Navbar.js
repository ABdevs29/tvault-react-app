import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
        <img src={logo} alt="logo-icon" />
        </div>
        <div className="nav-content">
          <ul className="nav-list">
            <li>
              <Link
                to="/safes"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="nav-link nav-link-active">Safes</div>
              </Link>
            </li>
            <li>
              <Link
                to="/vault"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="nav-link">Vault AppRoles</div>
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="nav-link">Service Accounts</div>
              </Link>
            </li>
            <li>
              <Link
                to="/iam"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="nav-link">IAM Service Accounts</div>
              </Link>
            </li>
            <li>
              <Link
                to="/azure"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="nav-link">Azure Active Directory</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
