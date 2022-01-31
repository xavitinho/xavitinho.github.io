let links = {
  facebook: ['facebook', 'https://facebook.com/xavier.com.br', 'fb.me/xavier.com.br', 'logo-facebook'],
  twitter: ['twitter', 'https://twitter.com/xavitinho', '@xavitinho', 'logo-twitter'],
  instagram: ['instagram', 'https://www.instagram.com/abcdefghijlmnopqrstu__z/', '@abcdefghijlmnopqrstu__z', 'logo-instagram'],
  discord: ['discord', 'https://discord.com/users/410886443964039169', 'xavier 🌈#7692', 'logo-discord'],
  tiktok: ['tiktok', 'https://tiktok.com/@xavitinho', '@xavitinho', 'logo-tiktok'],
  spotify: ['spotify', 'https://open.spotify.com/user/asxvitor', '@asxvitor', 'play-circle'],
  youtube: ['youtube', 'https://youtube.com/xrvitro', false, 'logo-youtube'],
  twitch: ['twitch', 'https://twitch.tv/xavierxavierv', false, 'logo-twitch'],
  github: ['github', 'https://github.com/xavitinho', false, 'logo-github'],
  palavrau: ['palavrau', 'https://xavitinho.github.io/palavrau', false, 'open'],
  gamerfilosofobot: ['gamer filósofo bot', 'https://xavitinho.github.io/gamerfilobot', false, 'open']
}

let bg = Math.floor(Math.random() * 6)

let ebg = document.getElementById('bg')

ebg.style = `background-image: url("backgrounds/${bg}.jpg")`

makebuttons()

function makebuttons() {
  let e = document.getElementById('backbt')
  e.innerHTML = ''

  let buttonslist = document.getElementById('middlesection')
  buttonslist.innerHTML = ''

  for (link of Object.keys(links)) {
    buttonslist.innerHTML +=`
    <div class="link" id="link_${link}">
      <button class="linkbutton" id="button_${link}">
        <ion-icon name="${links[link][3]}"></ion-icon>
        <strong>${links[link][0]}</strong>
      </button>
      <div class ="responsive"
      onclick="window.open('${links[link][1]}','_blank')"
      onmouseover="mouseover('${link}')"
      onmouseout="mouseout('${link}')"> </div>
    </div>`
  }
  buttonslist.innerHTML +=
    `<div class="link">
  <button class="blackbutton" onclick="biblia()">
     <ion-icon name="book"></ion-icon>
     <strong>A Bíblia Sagrada</strong>
  </button>
  </div>`

  colorbuttons()
}

function colorbuttons() {
  let colors = ['#f00c', '#f80c', '#ff0c', '#8f0c', '#0f0', '#0f8c', '#0ffc', '#08fc', '#00fc', '#80fc', '#f0fc', '#f08c', '#f00c']
  let i = 1;
  let colorant = colors[0]
  for (link of Object.keys(links)) {
    let e = document.getElementById(`link_${link}`)
    e.style = `background-image: linear-gradient(${colorant}, ${colors[i]});`
    colorant = colors[i]
    i++;
  }
}

function mouseover(link) {
  let e = document.getElementById(`button_${link}`)
  if (links[link][2]) {
    e.innerHTML = `<strong>${links[link][2]}</strong>`
  } else {
    e.innerHTML = `<strong>${links[link][1].replace('https://', '')}</strong>`
  }
  e = document.getElementById(`link_${link}`)
  e.style = "background-color: #000c;"
}

function mouseout(link) {
  let e = document.getElementById(`button_${link}`)
  e.innerHTML = `
  <ion-icon name="${links[link][3]}"></ion-icon>
  <strong>${links[link][0]}</strong>`
  colorbuttons()
}

async function biblia() {
  let bibliatxt = 'deu ruim'
  await fetch('https://xaax.repl.co/biblia.txt')
    .then(response => response.text())
    .then(txtResponse => {
      bibliatxt = txtResponse
    })

  let e = document.getElementById('middlesection')
  e.innerHTML = '<div class="bgbiblia"><biblia id="biblia"></biblia></div>'

  e = document.getElementById('biblia')
  e.innerText = bibliatxt
  e.innerHTML += '<br><br><br><br><br><br><br><br>'

  e = document.getElementById('backbt')
  e.innerHTML = `
    <button class="backbt">
    <ion-icon name="arrow-back-circle" onclick="makebuttons()"></ion-icon>
    </button>`
}
