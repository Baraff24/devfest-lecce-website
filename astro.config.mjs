import { defineConfig } from 'astro/config'

import yaml from '@rollup/plugin-yaml'

import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

import icon from 'astro-icon'

import preact from '@astrojs/preact'

const __dirname = dirname(fileURLToPath(import.meta.url))
const allowedPreviewHosts = ['nonesthetic-mistie-conjugally.ngrok-free.dev']

// https://astro.build/config
export default defineConfig({
    compressHTML: true,

    devToolbar: {
        enabled: false,
    },

    vite: {
        resolve: {
            alias: {
                '@': join(__dirname, 'src'),
            },
        },
        plugins: [yaml()],
        server: {
            allowedHosts: allowedPreviewHosts,
        },
        preview: {
            allowedHosts: allowedPreviewHosts,
        },
    },

    integrations: [icon(), preact()],
})
