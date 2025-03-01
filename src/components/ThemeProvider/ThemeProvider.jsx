import { useState } from "react"
import { ThemeContext } from "../../Context/Context"


export default function ThemeProvider ({children}) {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    // theme === 'light' ? setTheme('dark') : setTheme('light')
    if (theme === 'light') {
      setTheme('dark')
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    } 
    else {
      setTheme('light')
      document.body.classList.remove('dark')
     	document.body.classList.add('light')
    
    }
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  )
}