import React from 'react'

export default function EmptyBasketPage() {
  return (
    <div>
      <ProductBasket/>
      <Link to={'/products/all'}>
        <ButtonCard title="Continue Shoping" widthBtn="313" />
     </Link>
      {/* <p>Looks like you have no items in your basket currently.</p> */}
        
    </div>
  )
}
