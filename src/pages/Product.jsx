import React from 'react'
import ProductDetails from '../components/products/ProductDetails'
import { useParams } from 'react-router-dom'

const Product = () => {
    const {id}=useParams()
    console.log(id)
  return (
    <ProductDetails id={id} />
  )
}

export default Product