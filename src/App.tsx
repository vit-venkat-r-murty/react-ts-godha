import AuthContextProvider from "./components/states/useContext/auth-context/AuthContext"
import AuthUser from "./components/states/useContext/auth-context/AuthUser"
import ThemeContextProvider, { ThemeContext } from "./components/states/useContext/theme-context/ThemeContext"
import { useContext } from "react"

function App() {

   const theme = useContext(ThemeContext)
   return (
      <>
      <AuthContextProvider>
         <ThemeContextProvider>
            <div className='flex items-center justify-center gap-x-3 h-screen w-full'>
               <h1>Hello React with Typescript</h1>
               <AuthUser/>
            </div>
            {/* <div 
               style={{ 
                  backgroundColor : theme.primaryTheme.background, 
                  color: theme.primaryTheme.text
               }}>
               Card
            </div> */}
            
         </ThemeContextProvider>
         </AuthContextProvider>
      </>
   )
}

export default App
