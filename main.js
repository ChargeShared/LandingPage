import './style.css'
import githublogo from './src/img/25231.png'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://github.com/ChargeShared" target="_blank">
      <img src="${githublogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Welcome to ChargeShared!</h1>
    <p class="read-the-docs">
      This project is still under heavy development, go check our progress at <a href="https://github.com/ChargeShared" target="_blank">Github</a>
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
