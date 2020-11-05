
const me = document.getElementById("me");
const column1 = document.getElementById("column1");
const skills = document.getElementById("skills");
const languages = document.getElementById("languages");

const experienceDiv = document.getElementById("experience");

function loadMe () {

  column1.innerHTML = "";

  //column1.innerHTML += "<img id=face src=assets/me.png>";

  column1.innerHTML += `<h1 id=name>${json.me.name}</h1><p id=title>${json.me.title}</p>`;


  if (json.me.phone) {
      column1.innerHTML += `<p><img class=info-icon src=./assets/call-18dp.svg alt=phone> ${json.me.phone}</p>`
  }

  if (json.me.email) {
      column1.innerHTML += `<p><img class=info-icon src=./assets/email-18dp.svg alt=email> ${json.me.email}</p>`
  }

  let github = json.me.github;
  let twitter = json.me.twitter;
  let instagram = json.me.instagram;
  let okuna = json.me.okuna;

  column1.innerHTML += "<div id=links>"

  if (github) {
    links.innerHTML += `<a class=github href=https://github.com/${github}><img src=./assets/github.svg alt=Github></a>`;
  }
  if (twitter) {
    links.innerHTML += `<a class=twitter href=https://twitter.com/${twitter}><img src=./assets/twitter.png alt=Twitter></a>`;
  }
  if (instagram) {
    links.innerHTML += `<a class=instagram href=https://instagram.com/${instagram}><img src=./assets/instagram.png alt=Instagram></a>`;
  }
  if (okuna) {
    links.innerHTML += `<a class=okuna href=https://okuna.io/${okuna}><img src=./assets/okuna.png alt=Okuna></a>`;
  }

  column1.innerHTML += "</div>"

  skills.innerHTML = "";
  for (var i = 0; i < json.me.skills.length; i++) {
    let s = json.me.skills[i];
    skills.innerHTML += `<li>${s.name}</li>`;
  }

  languages.innerHTML = "";
  for (var i = 0; i < json.me.languages.length; i++) {
    let s = json.me.languages[i];
    languages.innerHTML += `<li>${s.name}</li>`;
  }
}

function loadExperience () {

  experienceDiv.innerHTML = "";

  for (var i = 0; i < json.experience.length; i++) {
    let e = json.experience[i];
    let url = e.url;
    let card = "<div class=card>";
    card += url ? `<a href=${url}><h3>${e.name}</h3></a>` : `<h3>${e.name}</h3>`;

    if (e.image) {
      card += `<img src=${e.image}>`;
    }

    card += `<p>${e.text}</p>`;

    let file = e.file;
    if (file) {
      card += `<a class=file-button href=${file} download>Download</a>`;
    }

    let links = e.links;
    if (links) {
      for (var j = 0; j < links.length; j++) {
        let link = links[j];
        card += `<a class=link href=${link.url}>${link.text}</a>`;
      }
    }

    card += "</div>";
    experienceDiv.innerHTML += card;
  }
}

loadMe();
loadExperience();


