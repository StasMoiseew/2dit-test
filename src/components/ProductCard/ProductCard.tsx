import React, { FC } from 'react'
import { Product } from '../../models'

import './ProductCard.css';
import { CheckMarkIcon, RocketIcon, SaleIcon, StarIcon } from '../../assets/icons';

type Props = {
  product: Product;
  className?: string;
}

export const ProductCard: FC<Props> = ({ product, className }) => {
  const baseClassName = className ? `product-card ${className}` : 'product-card';

  const getBadge = (variant: 'sale' | 'new' | 'hit') => {
    let badgeTitle = '';
    let icon = <></>;
    switch(variant) {
      case 'hit':
        badgeTitle = 'ХИТ ПРОДАЖ';
        icon = <StarIcon className='product-card__badge-icon' />
        break;
      case 'new':
        badgeTitle = 'НОВИНКА';
        icon = <RocketIcon className='product-card__badge-icon' />
        break;
      case 'sale':
        badgeTitle = 'АКЦИЯ';
        icon = <SaleIcon className='product-card__badge-icon' />
        break;
      default:
        break;
    }
    return (
      <div className={`product-card__badge product-card__badge_${variant}`}>
        {icon}  
        {badgeTitle}
      </div>
    )
  }

  return (
    <div className={baseClassName}>
      <div className='product-card__image-wrapper'>
        <img className='product-card__image' alt={product.title} src={product.imageUrl} />
        {product.isHit && getBadge('hit')}
        {product.isNew && getBadge('new')}
        {product.isSale && getBadge('sale')}
        {product.onStorage && (
          <div className='product-card__on-storage'>
            <CheckMarkIcon className='product-card__on-storage-icon' />
            В наличии
          </div>
        )}
      </div>
      <div className='product-card__info-wrapper'>
        <span className='product-card__category'>{product.category}</span>
        <strong className='product-card__title'>{product.title}</strong>
        <div className='product-card__vendor'>
          <span className='product-card__vendor-label'>Артикул: </span>
          {product.vendor}
        </div>
        <div className='product-card__price'>
          <span className='product-card__price-label'>от: </span>
          {product.price.toLocaleString('RU-ru')}
          <span className='product-card__price-sign'> ₽</span>
        </div>
      </div>
    </div>
  )
}