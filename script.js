const mobileMenuButton = document.querySelector('.menu-button');
const mobileMenuOptions = document.querySelector('.navbar-items');
const navBarItems = document.querySelectorAll('.Nav-Item');
const logo = document.querySelector('.logo');
const worksDiv = document.querySelector('.works-cards-container');
const main = document.querySelector('main');

mobileMenuButton.addEventListener('click', () => {
  logo.classList.toggle('logo-invisible');
  mobileMenuButton.classList.toggle('menu-button-open');
  mobileMenuOptions.classList.toggle('visible-mobilemenu');
});
navBarItems.forEach((item) => {
  item.addEventListener('click', () => {
    logo.classList.toggle('logo-invisible');
    mobileMenuButton.classList.toggle('menu-button-open');
    mobileMenuOptions.classList.remove('visible-mobilemenu');
  });
});

const listOfWork = [{
  Id: '1',
  Name: 'Multi-Post Stories Gain+Glory 1',
  Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
  popImg: 'images/SnapshootPortfolio.svg',
  techs: ['css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap'],
  liveLink: 'https://jrosario19.github.io/Juan-Rosario-Portfolio/',
  sourceLink: 'https://github.com/jrosario19/Juan-Rosario-Portfolio',
}, {
  Id: '2',
  Name: 'Multi-Post Stories Gain+Glory 2',
  Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
  popImg: 'images/SnapshootPortfolio.svg',
  techs: ['css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap'],
  liveLink: 'https://jrosario19.github.io/Juan-Rosario-Portfolio/',
  sourceLink: 'https://github.com/jrosario19/Juan-Rosario-Portfolio',
}, {
  Id: '3',
  Name: 'Multi-Post Stories Gain+Glory 3',
  Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
  popImg: 'images/SnapshootPortfolio.svg',
  techs: ['css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap'],
  liveLink: 'https://jrosario19.github.io/Juan-Rosario-Portfolio/',
  sourceLink: 'https://github.com/jrosario19/Juan-Rosario-Portfolio',
}, {
  Id: '4',
  Name: 'Multi-Post Stories Gain+Glory 4',
  Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
  popImg: 'images/SnapshootPortfolio.svg',
  techs: ['css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap'],
  liveLink: 'https://jrosario19.github.io/Juan-Rosario-Portfolio/',
  sourceLink: 'https://github.com/jrosario19/Juan-Rosario-Portfolio',
}, {
  Id: '5',
  Name: 'Multi-Post Stories Gain+Glory 5',
  Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
  popImg: 'images/SnapshootPortfolio.svg',
  techs: ['css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap'],
  liveLink: 'https://jrosario19.github.io/Juan-Rosario-Portfolio/',
  sourceLink: 'https://github.com/jrosario19/Juan-Rosario-Portfolio',
}, {
  Id: '6',
  Name: 'Multi-Post Stories Gain+Glory 6',
  Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
  popImg: 'images/SnapshootPortfolio.svg',
  techs: ['css', 'JavaScript', 'html', 'Codekit', 'GitHub', 'Bootstrap'],
  liveLink: 'https://jrosario19.github.io/Juan-Rosario-Portfolio/',
  sourceLink: 'https://github.com/jrosario19/Juan-Rosario-Portfolio',
}];

function techs(techs) {
  return `
  <ul class="recent-works-frameworks">
    ${techs.map((tech) => `<li class="frameworks-item">${tech}</li>`).slice(0, 3).join('')}
  </ul>
`;
}

function techsForPopup(techs) {
  return `
  <ul class="recent-works-frameworks-popup">
    ${techs.map((tech) => `<li class="frameworks-item">${tech}</li>`).join('')}
  </ul>
`;
}

function cardWork(item) {
  return `
  <article class="work-card">
  <div class="project-image">
      
  </div>
      <h3>${item.Name}</h3>
      ${techs(item.techs)}
  <a href="#" class="btn btn-align" onclick="ShowPopup(${item.Id})">See Project</a>
</article>
  `;
}

worksDiv.innerHTML = `${listOfWork.map(cardWork).join('')}`;

const backgroundModal = document.createElement('div');
const modal = document.createElement('div');

function ShowPopup(id) {
  const workForPopup = listOfWork.filter((x) => x.Id == id);
  modal.classList.add('modal-container');
  modal.innerHTML = `
  <article class="modal">
    <div class="popup-close" onclick="CloseModal()">
    </div>
    <div class="popup-img">
      <img src="${workForPopup[0].popImg}" alt="Project-image">
    </div>
    <div class="title-button-section">
      <div class="title-frameworksOptions">
        <div class="popup-title">
        <h2>${workForPopup[0].Name}</h2>
        </div>
        <div>
        ${techsForPopup(workForPopup[0].techs)}
        </div>
      </div>
      <div class="popup-buttons-desktop">
        <a href="${workForPopup[0].liveLink}" class="live-button">See Live</a>
        <a href="${workForPopup[0].sourceLink}" class="source-button">See Source</a>
      </div>
    </div>
    <div class="description-button-mobile">
      <p class="popup-description">${workForPopup[0].Description}</p>
      <div class="popup-buttons-mobile">
        <a href="${workForPopup[0].liveLink}" class="live-button">See Live <img src="images/Icon-Live.svg" alt="icon-live"></a>
        <a href="${workForPopup[0].sourceLink}" class="source-button">See Source <img src="images/Vector-Github.svg" alt="icon-github"></a>
      </div>
    </div>
  </article>
  `;
  backgroundModal.classList.add('background-popup');
  main.appendChild(backgroundModal);
  backgroundModal.appendChild(modal);
}

function CloseModal() {
  if (backgroundModal) {
    backgroundModal.remove();
  }
  if (modal) {
    modal.remove();
  }
}
ShowPopup(10);
CloseModal();
