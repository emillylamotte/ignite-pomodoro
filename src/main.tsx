import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { themeDefault } from './themes/default.ts'
import { GlobalStyles } from './themes/globalStyle.ts'
import { HashRouter } from 'react-router-dom'
import { App } from './routers/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={themeDefault}>
      <HashRouter>
        <App />
      </HashRouter>
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>,
)
