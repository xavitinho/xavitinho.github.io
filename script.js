let links = {
  facebook: ['facebook', 'https://facebook.com/xaviihtube', 'fb.me/xaviihtube', 'logo-facebook'],
  twitter: ['twitter', 'https://twitter.com/xavitinho', '@xavitinho', 'logo-twitter'],
  instagram: ['instagram', 'https://www.instagram.com/xaviihtube/', '@xaviihtube', 'logo-instagram'],
  discord: ['discord', 'https://discord.com/users/410886443964039169', 'xavier 🌈#7692', 'logo-discord'],
  tiktok: ['tiktok', 'https://tiktok.com/@xavitinho', '@xavitinho', 'logo-tiktok'],
  spotify: ['spotify', 'https://open.spotify.com/user/asxvitor', '@asxvitor', 'play-circle'],
  youtube: ['youtube', 'https://youtube.com/xrvitro', false, 'logo-youtube'],
  twitch: ['twitch', 'https://twitch.tv/xavierxavierv', false, 'logo-twitch'],
  github: ['github', 'https://github.com/xavitinho', false, 'logo-github'],
  itchio: ['itch.io', 'https://xaax.itch.io', false, 'game-controller'],
  bolas: ['bolas', '/bolas', 'bolas', 'game-controller', true]
}

let bg = Math.floor(Math.random() * 6)

let ebg = document.getElementById('bg')

ebg.style = `background-image: url("backgrounds/${bg}.jpg")`

makebuttons()

const urlSearchParams = new URLSearchParams(window.location.search);
if (urlSearchParams) {
  const params = Object.fromEntries(urlSearchParams.entries())
  if(params.play) {
    if(params.play == 'bolas') {
      exe_bolas()
    }
  }
}

function makebuttons() {
  let e = document.getElementById('backbt')
  e.innerHTML = ''

  e = document.getElementById('gamecontainer')
  e.innerHTML = ''
  e.className = 'invisible'

  let buttonslist = document.getElementById('middlesection')
  buttonslist.innerHTML = ''

  for (link of Object.keys(links)) {
    if (!links[link][4]) {
      buttonslist.innerHTML +=`
      <a href="${links[link][1]}" target= "_blank" 
      class="link" id="link_${link}"
      onmouseover="mouseover('${link}')"
      onmouseout="mouseout('${link}')">
        <ion-icon name="${links[link][3]}">
        </ion-icon>
        ${links[link][0]}
      </a>`
    }
  }
  buttonslist.innerHTML +=
  `<div class="link" id="link_bolas" 
  onclick="exe_bolas()"
  onmouseover="mouseover('bolas')"
  onmouseout="mouseout('bolas')">
     <ion-icon name="game-controller">
     </ion-icon>
     bolas
  </div>
  <div class="link">
  <button class="blackbutton" onclick="biblia()">
     <ion-icon name="book">
     </ion-icon>
     A Bíblia Sagrada
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
  let e = document.getElementById(`link_${link}`)
  if (links[link][2]) {
    e.innerHTML = `${links[link][2]}`
  } else {
    e.innerHTML = `${links[link][1].replace('https://', '')}`
  }
  e = document.getElementById(`link_${link}`)
  e.style = "background-color: #000c;"
}

function mouseout(link) {
  let e = document.getElementById(`link_${link}`)
  e.innerHTML = `
  <ion-icon name="${links[link][3]}">
  </ion-icon>
  ${links[link][0]}`
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
    <button class="backbt" onclick="makebuttons()">
    <ion-icon name="arrow-back-circle"></ion-icon>
    </button>`
}

function exe_bolas () {
  let e = document.getElementById('middlesection')
  e.innerHTML = ''
  e = document.getElementById('gamecontainer')
  e.className = 'gamecontainer'
  e.innerHTML =   `
    <button class="buttonfullscreen" onclick="fullscreen('bolas')"> 
      <ion-icon name="expand-sharp">
      </ion-icon>
    </button>
    <iframe id="bolas" src="https://xavitinho.github.io/bolas/" title="bolas">
    </iframe>`
  e = document.getElementById('backbt')
  e.innerHTML = `
    <button class="backbt" onclick="makebuttons()">
    <ion-icon name="arrow-back-circle"></ion-icon>
    </button>`
}

function fullscreen(element){
  let e = document.getElementById(element)
  if (document.fullscreenElement) {
    document.exitFullscreen()
    document.cancelFullScreen()
  } else {
    e.requestFullscreen()
    if(screen.orientation){
      screen.orientation.lock("landscape-primary")
    }
  }
}
