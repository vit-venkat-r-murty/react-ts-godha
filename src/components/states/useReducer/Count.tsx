import { useReducer } from 'react'

type CounterState = {
   count: number
}

// type CounterAction = {
//    type: 'increament' | 'decreament' | 'reset'
//    payload?: number
// }

// Discriminated unions in TS

type UpdateAction = {
   type: 'increament' | 'decreament'
   payload: number
}

type ResetAction = {
   type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
   switch (action.type) {
      case 'increament':
         return { count: state.count + action.payload }
      case 'decreament':
         return { count: state.count - action.payload }
      case 'reset':
         return initialState
      default:
         return state
   }
}

export default function Count() {
   const [state, dispatch] = useReducer(reducer, initialState)

   return (
      <>
         <div>Count is {state.count}</div>
         <button onClick={() => dispatch({ type: 'increament', payload: 1 })}>
            Increment
         </button>
         <button onClick={() => dispatch({ type: 'decreament', payload: 1 })}>
            Decrement
         </button>
         <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </>
   )
}
