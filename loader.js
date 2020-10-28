
const nameText = document.getElementById("name");
const aboutText = document.getElementById("about");
const skills = document.getElementById("skills");
const info = document.getElementById("info");
const me = document.getElementById("me");

const experienceDiv = document.getElementById("experience");

function loadMe () {
  nameText.innerText = json.me.name;
  aboutText.innerText = json.me.text;

  skills.innerHTML = "";
  for (var i = 0; i < json.me.skills.length; i++) {
    let s = json.me.skills[i];
    skills.innerHTML += `<li>${s.name}</li>`;
  }

  info.innerHTML = "";
  function addInfoIfNotNull (name, x) {
    if (x) {
      info.innerHTML += `<li>${name}: ${x}</li>`
    }
  }

  addInfoIfNotNull("phone", json.me.phone);
  addInfoIfNotNull("email", json.me.email);

  let github = json.me.github;
  let twitter = json.me.twitter;
  let instagram = json.me.instagram;
  let okuna = json.me.okuna;

  function addButton (type, link, name) {
    me.innerHTML += `<a href=${link} class=${type}>${name}</a>`;
  }

  if (github) addButton("github", `https://github.com/${github}`, "Github");
  if (twitter) addButton("twitter", `https://twitter.com/${twitter}`, "Twitter");
  if (instagram) addButton("instagram", `https://instagram.com/${instagram}`, "Instagram");
  if (okuna) addButton("okuna", `https://okuna.io/${okuna}`, "Okuna");
}

function loadExperience () {

  experienceDiv.innerHTML = "";

  for (var i = 0; i < json.experience.length; i++) {
    let e = json.experience[i];
    let url = e.url;
    let card = "<div class=card>";
    card += url ? `<a href=${url}><h3>${e.name}</h3></a>` : `<h3>${e.name}</h3>`;
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
