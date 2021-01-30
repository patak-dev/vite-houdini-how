import './style.css'

import workletURL from "omt:extra-scalloped-border/worklet.js";

CSS.paintWorklet.addModule(workletURL);

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
