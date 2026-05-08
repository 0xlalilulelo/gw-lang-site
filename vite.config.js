import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  css: {
    transformer: 'postcss',
  },
  build: {
    cssMinify: false,
    rollupOptions: {
      input: {
        main: 'index.html',
        'language-reference': 'docs/language-reference.html',
        'standard-library': 'docs/standard-library.html',
        'comptime-guide': 'docs/comptime-guide.html',
        'borrow-checker': 'docs/borrow-checker.html',
        'abi-specification': 'docs/abi-specification.html',
        'arsenal-cli': 'docs/arsenal-cli.html',
        'codec-repl': 'docs/codec-repl.html',
        'cipher-package-mgr': 'docs/cipher-package-mgr.html',
        'lsp-editor': 'docs/lsp-editor.html',
        'cross-compile': 'docs/cross-compile.html',
      }
    }
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/icon-192x192.png', 'icons/icon-512x512.png', 'fonts/**/*.otf'],
      manifest: {
        name: 'GW // Arsenal',
        short_name: 'GW',
        description: 'GW // Arsenal — Tactical Systems Programming Language',
        theme_color: '#050709',
        background_color: '#050709',
        display: 'standalone',
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
