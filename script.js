let links = {
  facebook: ['facebook', 'https://facebook.com/xavier.com.br', 'fb.me/xavier.com.br', 'logo-facebook'],
  twitter: ['twitter', 'https://twitter.com/xavitinho', '@xavitinho', 'logo-twitter'],
  instagram: ['instagram', 'https://www.instagram.com/abcdefghijlmnopqrstu__z/', '@abcdefghijlmnopqrstu__z', 'logo-instagram'],
  tiktok: ['tiktok', 'https://tiktok.com/@xavitinho', '@xavitinho', 'logo-tiktok'],
  spotify: ['spotify', 'https://open.spotify.com/user/asxvitor', '@asxvitor', 'play-circle'],
  youtube: ['youtube', 'https://youtube.com/xrvitro', false, 'logo-youtube'],
  twitch: ['twitch', 'https://twitch.tv/xavierxavierv', false, 'logo-twitch'],
  github: ['github', 'https://xavitinho.github.io', false, 'logo-github'],
  palavrau: ['palavrau', 'https://xavitinho.github.io/palavrau', false, 'open'],
  gamerfilosofobot: ['gamer filósofo bot', 'https://xavitinho.github.io/gamerfilobot', false, 'open']
}

let bg = Math.floor(Math.random() * 5)
let body = document.getElementById('body')
body.style = `background-image: url("backgrounds/${bg}.jpg")`

let buttonslist = document.getElementById('buttonslist')

buttonslist.innerHTML = ''

for (link of Object.keys(links)) {
  buttonslist.innerHTML +=
    `<button id="${link}"
     onclick="window.open('${links[link][1]}','_blank')"
     onmouseover="mouseover('${link}')"
     onmouseout="mouseout('${link}')">
     <ion-icon name="${links[link][3]}"></ion-icon>
     <strong>${links[link][0]}</strong>
  </button>`
}

colorbuttons()

function mouseover(link) {
  let e = document.getElementById(link)
  if (links[link][2]) {
    e.innerHTML = `<strong>${links[link][2]}</strong>`
  } else {
    e.innerHTML = `<strong>${links[link][1].replace('https://', '')}</strong>`
  }
  e.style = "background-color: #000a; color: #fff;"
}

function mouseout(link) {
  let e = document.getElementById(link)
  e.innerHTML = `
  <ion-icon name="${links[link][3]}"></ion-icon>
  <strong>${links[link][0]}</strong>`
  colorbuttons()
}

function colorbuttons() {
  let colors = ['#f00a', '#f80a', '#ff0a', '#8f0a', '#0f8a', '#0ff', '#08fa', '#00fa', '#80fa', '#f0fa', '#f08a', '#f0f']
  let i = 1;
  let colorant = colors[0]
  for (link of Object.keys(links)) {
    let e = document.getElementById(link)
    e.style= `background-image: linear-gradient(${colorant}, ${colors[i]});`
    colorant = colors[i]
    i++;
  }
}