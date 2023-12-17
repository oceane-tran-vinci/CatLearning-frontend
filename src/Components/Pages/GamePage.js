import game2Pic from '../../assets/math.jpg';
import game1Pic from '../../assets/AlgoIntro.png';
// import game1Pic from '../../assets/3a7be1d8c3752396876e4195f58dd32d.jpg'

const GamePage = () => {
  const game1Description = `
    Rejoignez la gamelle du chat en évitant les pièges
  `;

  const game2Description = `
    Un jeu pour comprendre les modulo en Mathématique
  `;

  const gamePageContent = `
  <div class="container my-5">
    <div class="row">
      <div class="col mb-4">
        <a href="/lien-vers-IntroAlgo" class="text-decoration-none">
          <div class="card">
            <img src="${game1Pic}" class="card-img-top h-100" alt="Image du Jeu 1" style="object-fit: cover; ">
            <div class="card-body">
              <h5 class="text-center">Chemin du chat</h5>
              <h5 class="card-title text-center border rounded">Gamelle</h5>
              <p class="card-text text-center">${game1Description}</p>
            </div>
          </div>
        </a>
      </div>
      <div class="col mb-4">
        <a href="/lien-vers-IntroModulo" class="text-decoration-none">
          <div class="card">
            <img src=${game2Pic} class="card-img-top h-100" alt="Image du Jeu 2" style="object-fit: cover; ">
            <div class="card-body">
              <h5 class="text-center">Analyseur de codes modulo</h5>
              <h5 class="card-title text-center border rounded">Mathématique</h5>
              <p class="card-text text-center">${game2Description}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
`;

  const main = document.querySelector('main');
  main.innerHTML = gamePageContent;
  main.style.display = 'flex';
  main.style.justifyContent = 'center';

  const gameIntroAlgoPage = document.querySelector('[href="/lien-vers-IntroAlgo"]');
  gameIntroAlgoPage.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = '/game/algoIntro';
  })

  const gameIntroModuloPage = document.querySelector('[href="/lien-vers-IntroModulo"]');
  gameIntroModuloPage.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = '/game/moduloIntro';
  })
};

export default GamePage;
