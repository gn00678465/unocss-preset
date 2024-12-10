import { recursiveTheme, getTheme, convertToRGB } from "./helpers";
import type { PresetBuildVariableOptions } from '../types'
import { colorToString } from '@unocss/rule-utils'

export function generateTheme(options: PresetBuildVariableOptions) {
  const { light, dark } = getTheme(options.theme)

  const lightBase = {}, darkBase = {}
  
  const lightTheme = recursiveTheme(light, options.variablePrefix, lightBase)
  recursiveTheme(dark, options.variablePrefix, darkBase)

  function handler(base: Record<string, string>) {
    return Object.fromEntries(
      Object.entries(base).map(([k, v]) => [k, colorToString(convertToRGB(v) || v)])
    )
  }
  
  return {
    theme: lightTheme,
    lightBase: handler(lightBase),
    darkBase: handler(darkBase)
  }
}