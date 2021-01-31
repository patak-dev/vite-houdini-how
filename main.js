import './style.css'

import workletURL from "extra-scalloped-border/worklet.js?url";

CSS.paintWorklet.addModule(workletURL);

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite and Houdini!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
