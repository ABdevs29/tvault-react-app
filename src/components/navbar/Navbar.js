import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import document from "../../images/document.svg";

export default function Navbar() {
  const [isActive, setIsActive] = useState([true, false, false, false, false]);

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
                onClick={() => setIsActive([true, false, false, false, false])}
              >
                <div
                  className={
                    isActive[0] == true
                      ? "nav-link nav-link-active"
                      : "nav-link"
                  }
                >
                  Safes
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/vault?data=hello"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => setIsActive([false, true, false, false, false])}
              >
                <div
                  className={
                    isActive[1] == true
                      ? "nav-link nav-link-active"
                      : "nav-link"
                  }
                >
                  Vault AppRoles
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => setIsActive([false, false, true, false, false])}
              >
                <div
                  className={
                    isActive[2] == true
                      ? "nav-link nav-link-active"
                      : "nav-link"
                  }
                >
                  Service Accounts
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/iam"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => setIsActive([false, false, false, true, false])}
              >
                <div
                  className={
                    isActive[3] == true
                      ? "nav-link nav-link-active"
                      : "nav-link"
                  }
                >
                  IAM Service Accounts
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/azure"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => setIsActive([false, false, false, false, true])}
              >
                <div
                  className={
                    isActive[4] == true
                      ? "nav-link nav-link-active"
                      : "nav-link"
                  }
                >
                  Azure Active Directory
                </div>
              </Link>
            </li>
            <li>
              <div className="nav-link document-link-container">
                <img src={document} alt="document-icon" id="documentIcon" />
                <u>Documentation</u>
              </div>
            </li>
            <li>
              <div className="nav-link document-link-container">
                <img src={document} alt="document-icon" id="documentIcon" />
                (Admin)Davis R.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
