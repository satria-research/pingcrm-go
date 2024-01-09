import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
    base: command === 'serve' ? '/' : '/dist/',
    plugins: [react()],
    publicDir: false,
    build: {
        manifest: true,
        outDir: path.resolve(__dirname, 'public/dist'),
        rollupOptions: {
            input: 'resources/js/app.js',
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/resources/js'),
        },
    },
}));