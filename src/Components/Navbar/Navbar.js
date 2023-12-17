// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import { getAuthenticatedUser, isAuthenticated } from '../../utils/auths';
import logoCat from '../../assets/logo_ebauche.png';

const SITE_NAME = 'CatLearning';

const Navbar = () => {
  renderNavbar();
}

function renderNavbar(){
  const authenticatedUser = getAuthenticatedUser();

  const anonymousUserNavbar = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <img class="logo-navbar" src="${logoCat}"> 
        <a class="navbar-brand" href="#">${SITE_NAME}</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" data-uri="/">Page d'accueil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/game">Jeux</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/leaderboardPage">Classement</a>
              </li>                         
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/register">Inscription</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/login">Connexion</a>
              </li>

              <!-- TODO Ajoutez ici le bouton de déconnexion avec condition
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/">Déconnexion</a>
              </li>
              -->

            </ul>
          </div>
        </div>
      </nav>
  `;

  const authenticatedUserNavbar = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <!--TODO à changer pour ajouter le Logo-->
        <a class="navbar-brand" href="#">Logo</a>        
        <a class="navbar-brand" href="#">${SITE_NAME}</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#" data-uri="/">Page d'accueil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-uri="/game">Jeux</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-uri="/">A propos de nous</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-uri="/">Classement</a>
            </li>                         
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#" data-uri="/logout">Déconnexion</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">${authenticatedUser?.username}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;

  const navbar = document.querySelector('#navbarWrapper');

  navbar.innerHTML = isAuthenticated() ? authenticatedUserNavbar : anonymousUserNavbar;
}

export default Navbar;