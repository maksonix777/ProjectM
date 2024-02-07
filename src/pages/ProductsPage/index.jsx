import React from 'react'
import ProductsContainer from '../../components/ProductsContainer'

export default function ProductsPage({type}) {
  return (
    <div>
      <ProductsContainer type={type}/>
    </div>
  )
}

