import Greet from './components/props/Greet'

function App() {
   return (
      <div className='grid place-content-center h-screen w-full'>
         <h1>Hello React with Typescript</h1>
         <Greet
            username='John'
            id={400}
         />
      </div>
   )
}

export default App
