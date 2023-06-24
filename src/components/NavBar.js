import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './NavBar.css'

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary  border-bottom border-bottom-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" id="logo" href="/">B9 GAMES</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"  href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/">Action</a></li>
                <li><a class="dropdown-item" href="/">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="/">Something else here</a></li>
              </ul>

            </li>
          </ul>

          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>

        </div>

      </div>

    </nav>
  );
}

export default NavBar;