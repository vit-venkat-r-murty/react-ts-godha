import { createContext, type ReactNode } from "react"
import { theme } from "./theme"


export const ThemeContext = createContext(theme)

export default function ThemeContextProvider({children}:{children: ReactNode}) {
  return (
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
  )
}
