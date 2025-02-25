import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { themeDefault } from './themes/default.ts'
import { GlobalStyles } from './themes/globalStyle.ts'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
