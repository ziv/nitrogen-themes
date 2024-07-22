import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        minify: false, // todo temporary
        lib: {
            entry: {
                index: 'src/index.ts',
                amy: 'src/amy.ts',
                dracula: 'src/dracula.ts'
            },
            formats: ['es'],
        },
        rollupOptions: {
            external: ['@lezer/highlight', '@codemirror/view', '@codemirror/language', '@codemirror/state']
        },
    },
    plugins: [
        dts({ include: ['src'], exclude: ['src/utils.ts'] })
    ]
});