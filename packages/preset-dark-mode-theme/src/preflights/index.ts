import { entriesToCss, type Preflight } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import type { PresetBuildVariableOptions } from '../types'

export function preflights(
  options: PresetBuildVariableOptions,
  lightBase: Record<string, string>,
  darkBase: Record<string,string>
): Preflight<Theme>[] | undefined {
  return [
    {
      layer: 'theme',
      getCSS() {
        const lightRoots = options.selector === 'media' ? ['@media (prefers-color-scheme: light)'] : [':root']
        const darkRoots = options.selector === 'media' ? ['@media (prefers-color-scheme: dark)'] : [`:root.${options.selector}`]

        let lightCss = entriesToCss(Object.entries(lightBase))
        let darkCss = entriesToCss(Object.entries(darkBase))
        if (options.variablePrefix !== 'un-') {
          lightCss = lightCss.replace(/--un-/g, `--${options.variablePrefix}`)
          darkCss = darkCss.replace(/--un-/g, `--${options.variablePrefix}`)
        }

        return [
          lightRoots.map(root => `${root}{${lightCss}}`).join(''),
          darkRoots.map(root => `${root}{${darkCss}}`).join('')
        ].join(';')
      },
    }
  ]
}