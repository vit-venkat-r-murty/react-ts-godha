import { useEffect, useState } from 'react'
import Card from './components/props/Card'
import type { ProductPros } from './types/Product'

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
   return (
      <>
         <h1>Hello React with Typescript</h1>
         <div className='flex items-center justify-center gap-x-3 h-screen w-full'>
            {products.map((item, index) => (
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
            ))}
         </div>
      </>
   )
}

export default App
