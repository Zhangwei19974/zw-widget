import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default (env: any) => {
  const envCache = loadEnv(env.mode, process.cwd())
  return defineConfig({
    base: envCache.VITE_BASE_URL,
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}
