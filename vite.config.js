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
        'gw-cli': 'docs/gw-cli.html',
        'gw-repl': 'docs/gw-repl.html',
        'gw-pkg': 'docs/gw-pkg.html',
        'lsp-editor': 'docs/lsp-editor.html',
        'cross-compile': 'docs/cross-compile.html',
        'playground': 'playground.html',
        'tools': 'tools.html',
        'community': 'community.html',
      }
    }
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/icon-192x192.png', 'icons/icon-512x512.png', 'fonts/**/*.otf'],
      manifest: {
        name: 'GW // GW-CORE',
        short_name: 'GW',
        description: 'GW // GW-CORE — Tactical Systems Programming Language',
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
