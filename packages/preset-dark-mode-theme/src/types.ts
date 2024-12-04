import type { PresetOptions } from 'unocss'
import type { Theme } from 'unocss/preset-mini'

type UnoCssThemeKeys = 'colors' | 'accentColor' | 'textColor' | 'backgroundColor' | 'borderColor' | 'shadowColor'

export type ColorsTheme = Pick<Theme, UnoCssThemeKeys>

export interface DarkModeSelectors {
  /**
   * Selector for light variant.
   *
   * @default '.light'
   */
  light?: string

  /**
   * Selector for dark variant.
   *
   * @default '.dark'
   */
  dark?: string
}

export interface PresetBuildVariableOptions extends PresetOptions {
  /**
   * 將黑暗模式主題綁定的 class name
   * @default 'dark'
   */
  darkClassName?: string
  /**
   * Prefix for CSS variables.
   *
   * @default 'un-'
   */
  variablePrefix?: string
  /**
   * 主題顏色設定
   */
  theme: ColorsTheme | { light: ColorsTheme; dark: ColorsTheme }

  /**
   * Enable preflights styles. (Reset styles)
   *
   * @default true
   */
  preflights?: boolean
}
