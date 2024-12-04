import { definePreset, entriesToCss, toArray } from 'unocss'
import type { PresetBuildVariableOptions } from './types'

export default definePreset((options: PresetBuildVariableOptions) => {


  return {
    name: '@unocss/preset-dark-mode-theme',
    layers: {
      theme: 0,
      default: 1,
    },
  }
})