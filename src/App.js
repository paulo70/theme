import Header from './components/Header'

import { ThemeProvider } from 'styled-components'
import { dayMode, nightMode } from './style/theme/theme'
import { btnLigth, btnDark } from './style/theme/variable'
import { GlobalStyle } from './style/GlobalStyle'
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState(true)

  const handleTheme = () => {
    setMode((mode) => !mode)
  }
  return (
    <div className="App">
      <ThemeProvider theme={mode ? dayMode : nightMode}>
        <GlobalStyle />
        <Header handleTheme={handleTheme} mode={mode ? btnLigth : btnDark} />
      </ThemeProvider>
    </div>
  );
}

export default App;
