import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import {resolve} from 'path'

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      "@App": resolve(__dirname, "./src/App"),
      "@activities": resolve(__dirname, "./src/activities"),
      "@commands": resolve(__dirname, "./src/commands"),
      "@components": resolve(__dirname, "./src/components"),
      "@modules": resolve(__dirname, "./src/modules"),
      "@UI": resolve(__dirname, "./src/UI"),
      "@common": resolve(__dirname, "./src/common/*"),
    },
  },
})
