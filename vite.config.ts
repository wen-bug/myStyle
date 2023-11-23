import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import preview from 'vite-plugin-vue-component-preview';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import tailwindcss from  'tailwindcss'
import autoprefixer from 'autoprefixer'
import path from 'path';
import Icons from 'unplugin-icons/vite';
import IconsResolver  from 'unplugin-icons/resolver';
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  },
  plugins: [preview(),vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
        IconsResolver(),
      ],
    }),
    Icons({
      autoInstall: true,
    })
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss, 
        autoprefixer,
      ]
    }
  }
})
