/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'styled-components'
import { themeDefault } from '../themes/default'

type ThemeType = typeof themeDefault

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
