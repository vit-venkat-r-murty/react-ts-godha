type CardProps = {
   title: string
   image: string
   description: string
   price: number
   discount?: number
   addCart: () => void
   stocks: 'inStock' | 'OutOfStock' | 'Left5'
   discountPrice: [number, number] // Tuples Just like Array
}

export default function Card({
   title,
   description,
   price,
   image,
   discount,
   addCart,
}: CardProps) {
   return (
      <div className='w-96 bg-slate-600 h-[400px] grid place-content-center'>
         <img
            src={image}
            alt={title}
         />
         <p>{title}</p>
         <p>{description}</p>
         <p>{price}</p>
         {discount ? <p>{discount}</p> : ''}

         <button
            type='button'
            onClick={addCart}>
            Add To Cart
         </button>
      </div>
   )
}
