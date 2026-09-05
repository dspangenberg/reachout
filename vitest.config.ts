import gtkx from '@gtkx/cli/vitest-plugin'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [gtkx({ compositor: process.env.GTKX_COMPOSITOR ?? 'sway' })],
  test: {
    include: ['tests/**/*.test.{ts,tsx}'],
    setupFiles: ['./tests/setup.ts'],
    bail: 1
  }
})
