import React, { FC, useMemo } from 'react'

import './Task2.css';
import { Product } from '../../models';
import { ProductCard } from '../../components/ProductCard';

type Props = {
  products: Product[];
}

export const Task2: FC<Props> = ({
  products,
}) => {
  const productList = useMemo(() => {
    return products.map(product => (
      <ProductCard product={product} className='task2__card' />
    ))
  }, [products])

  return (
    <section className='task2'>{productList}</section>
  )
}