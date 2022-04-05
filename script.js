const mobileMenuButton = document.querySelector('.menu-button');
const mobileMenuOptions = document.querySelector('.navbar-items');
const navBarItems = document.querySelectorAll('.Nav-Item');
const logo = document.querySelector('.logo');
const worksDiv = document.querySelector('.works-cards-container');
const main = document.querySelector('main');

mobileMenuButton.addEventListener('click', () => {
  console.log('Button Clicked');
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

let listOfWork=[{
Id: "1",
Name: "Multi-Post Stories Gain+Glory1",
Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
popImg: "images/SnapshootPortfolio.svg",
techs: ['css','JavaScript','html','Codekit','GitHub','Bootstrap'],
liveLink: "https://jrosario19.github.io/Juan-Rosario-Portfolio/",
sourceLink: "https://github.com/jrosario19/Juan-Rosario-Portfolio",
},{
Id: "2",
Name: "Multi-Post Stories Gain+Glory2",
Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
popImg: "images/SnapshootPortfolio.svg",
techs: ['css','JavaScript','html','Codekit','GitHub','Bootstrap'],
liveLink: "https://jrosario19.github.io/Juan-Rosario-Portfolio/",
sourceLink: "https://github.com/jrosario19/Juan-Rosario-Portfolio",
},{
Id: "3",
Name: "Multi-Post Stories Gain+Glory",
Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
popImg: "images/SnapshootPortfolio.svg",
techs: ['css','JavaScript','html','Codekit','GitHub','Bootstrap'],
liveLink: "https://jrosario19.github.io/Juan-Rosario-Portfolio/",
sourceLink: "https://github.com/jrosario19/Juan-Rosario-Portfolio",
},{
Id: "4",
Name: "Multi-Post Stories Gain+Glory",
Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
popImg: "images/SnapshootPortfolio.svg",
techs: ['css','JavaScript','html','Codekit','GitHub','Bootstrap'],
liveLink: "https://jrosario19.github.io/Juan-Rosario-Portfolio/",
sourceLink: "https://github.com/jrosario19/Juan-Rosario-Portfolio",
},{
Id: "5",
Name: "Multi-Post Stories Gain+Glory",
Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
popImg: "images/SnapshootPortfolio.svg",
techs: ['css','JavaScript','html','Codekit','GitHub','Bootstrap'],
liveLink: "https://jrosario19.github.io/Juan-Rosario-Portfolio/",
sourceLink: "https://github.com/jrosario19/Juan-Rosario-Portfolio",
},{
Id: "6",
Name: "Multi-Post Stories Gain+Glory",
Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
popImg: "images/SnapshootPortfolio.svg",
techs: ['css','JavaScript','html','Codekit','GitHub','Bootstrap'],
liveLink: "https://jrosario19.github.io/Juan-Rosario-Portfolio/",
sourceLink: "https://github.com/jrosario19/Juan-Rosario-Portfolio",
}]

function techs(techs){
  return `
  <ul class="recent-works-frameworks">
    ${techs.map((tech) => `<li class="frameworks-item">${tech}</li>`).slice(0, 3).join('')}
  </ul>
`;
}

function techsForPopup(techs){
  return `
  <ul class="recent-works-frameworks">
    ${techs.map((tech) => `<li class="frameworks-item">${tech}</li>`).join('')}
  </ul>
`;
}



function cardWork(item){
  return `
  <article class="work-card">
  <div class="project-image">
      
  </div>
      <h3>${item.Name}</h3>
      ${techs(item.techs)}
  <a href="#" class="btn btn-align" onclick="ShowPopup(${item.Id})">See Project</a>
</article>
  `
}

worksDiv.innerHTML= `${listOfWork.map(cardWork).join('')}`;

function ShowPopup(id) {
  let workForPopup=listOfWork.filter(x=>x.Id==id);
  console.log(workForPopup[0].Name);
  let modal=document.createElement('div');;
  modal.innerHTML=`
  <article class="modal"></article>
  `;

  backgroundModal = document.createElement('div');
  backgroundModal.classList.add('background-popup');
  main.appendChild(backgroundModal);
  backgroundModal.appendChild(modal);
}
