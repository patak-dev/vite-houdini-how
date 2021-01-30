import OMT from '@surma/rollup-plugin-off-main-thread'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    OMT(),
  ]
}
