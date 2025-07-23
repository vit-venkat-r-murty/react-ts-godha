import { useEffect, useState, type ChangeEvent } from 'react'
import type { ProductPros } from './types/Product'
import ButtonEvent from './components/events/ButtonEvent'
import InputEvent from './components/events/InputEvent'
import FormEvent from './components/events/FormEvent'

function App() {
   const [products, setProducts] = useState<ProductPros[]>([])

   async function getProducts(): Promise<void> {
      const res = await fetch('https://dummyjson.com/products?limit=2')
      const data = await res.json()

      if (data) {
         setProducts(data.products)
      }
   }

   useEffect(() => {
      getProducts()
   }, [])

   function handleDynamicChange<
      T extends HTMLInputElement | HTMLTextAreaElement
   >(e: ChangeEvent<T>) {
      console.log(e.target.value)
   }

   return (
      <>
         <h1>Hello React with Typescript</h1>
         <div className='flex items-center justify-center gap-x-3 h-screen w-full'>
            {/* {products.map((item, index) => (
               <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  image={item.images[0]}
                  price={item.price}
                  discount={item.discount}
                  addCart={() => console.log(item.title)}
                  stocks='inStock'
                  discountPrice={[1, 2]}
               />
            ))} */}

            {/* <Title children='Hello' />

            <Heading>
               <h2>React Node</h2>
               <Title children='Hello Component' />
            </Heading> */}

            {/* <StatusCompoent status={Status.Reject} />

            <form>
               <Button
                  type='submit'
                  label='Save'
                  bgColor='bg-green-200'
                  textColor='text-green-800'
               />
            </form>

            <Button
               type='button'
               label='Edit'
               bgColor='bg-purple-200'
               textColor='text-purple-800'
            />

            <Container style={{ border: '2px solid #000', padding: '4px' }} /> */}

            <ButtonEvent
               handleClick={(event, id) =>
                  console.log('Clicked', event.clientX, id)
               }
            />

            <InputEvent
               value=''
               handleChange={(e) => console.log(e.target.value)}
            />
            <FormEvent
               handleSubmit={(e) => {
                  e.preventDefault()
                  console.log('Form Submited')
               }}
               handlePaste={(e) =>
                  `Pasted Content : ${e.clipboardData?.getData('text')}`
               }
               handleKeyboard={(e) => {
                  if (e.key === 'Enter') {
                     console.log('Enter Pressed')
                  }
               }}
            />
         </div>
      </>
   )
}

export default App
