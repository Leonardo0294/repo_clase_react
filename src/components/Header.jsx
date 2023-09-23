import React from "react";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light colorPrincipal">
        <div className="container-fluid">
          <img src="../src/assets/jun.png" alt="logo" width="30" height="30" />
          <a className="navbar-brand text-light" href="#">
            Job <span className="unite">Unite</span>
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="btn btn-primary text-light"
                aria-current="page"
                href="login"
              >
                Iniciar sesión
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
