let links = {
  facebook: ['facebook', 'https://facebook.com/xaviihtube', 'fb.me/xaviihtube', 'logo-facebook'],
  twitter: ['twitter', 'https://twitter.com/xavitinho', '@xavitinho', 'logo-twitter'],
  instagram: ['instagram', 'https://www.instagram.com/xaviihtube/', '@xaviihtube', 'logo-instagram'],
  discord: ['discord', 'https://discord.com/users/724292285981786212', 'xaax#7146', 'logo-discord'],
  tiktok1: ['tiktok', 'https://tiktok.com/@xavitinho', '@xavitinho', 'logo-tiktok'],
  tiktok2: ['tiktok', 'https://tiktok.com/@xaviihtube', '@xaviihtube', 'logo-tiktok'],
  spotify: ['spotify', 'https://open.spotify.com/user/asxvitor', '@asxvitor', 'play-circle'],
  letterboxd: ['letterboxd', 'https://letterboxd.com/xavitinho', false, 'film-outline'],
  youtube: ['youtube', 'https://youtube.com/@xavitinho', false, 'logo-youtube'],
  twitch: ['twitch', 'https://twitch.tv/xaviihtube', false, 'logo-twitch'],
  github: ['github', 'https://github.com/xavitinho', false, 'logo-github'],
  itchio: ['itch.io', 'https://xaax.itch.io', false, 'game-controller']
}

makebuttons()

const urlSearchParams = new URLSearchParams(window.location.search);
if (urlSearchParams) {
  const params = Object.fromEntries(urlSearchParams.entries())
  if (params.play) {
    if (params.play == 'bolas') {
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
  let i = 0;
  let colors = [
    'red', 'orange', 'yellow', 'yellowgreen', 'green', 'green2', 'greenwater', 'greenblue', 'blue', 'purple', 'pink'
  ]
  for (link of Object.keys(links)) {
    let b = document.createElement('a')
    b.href = links[link][1]
    b.target = "_blank"
    b.className = `link ${colors[0]}`
    b.id = `link_${link}`
    b.innerHTML = `<ion-icon name="${links[link][3]}"></ion-icon>${links[link][0]}`
    b.setAttribute('onmouseover', `mouseover('${link}')`)
    b.setAttribute('onmouseleave', `mouseout('${link}')`)
    buttonslist.appendChild(b)
    colors.push(colors.shift())
  }
  
  let b = document.createElement('a')
  b.className = 'link'
  b.onclick = () => exe_bolas()
  b.innerHTML = '<ion-icon name="game-controller"></ion-icon> bolas'
  buttonslist.appendChild(b)
  

}

function mouseover(link) {
  let e = document.getElementById(`link_${link}`)
  if (links[link][2]) {
    e.innerHTML = `${links[link][2]}`
  } else {
    e.innerHTML = `${links[link][1].replace('https://', '')}`
  }
}

function mouseout(link) {
  let e = document.getElementById(`link_${link}`)
  e.innerHTML = `<ion-icon name="${links[link][3]}"></ion-icon> ${links[link][0]}`
}

function exe_bolas() {
  let e = document.getElementById('middlesection')
  e.innerHTML = ''
  e = document.getElementById('gamecontainer')
  e.className = 'gamecontainer'
  e.innerHTML = `
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

function fullscreen(element) {
  let e = document.getElementById(element)
  if (document.fullscreenElement) {
    document.exitFullscreen()
    document.cancelFullScreen()
  } else {
    e.requestFullscreen()
    if (screen.orientation) {
      screen.orientation.lock("landscape-primary")
    }
  }
}
