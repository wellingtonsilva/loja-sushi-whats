import { Cart } from '@/types/cart'
import { formatCurrency } from '@/utils/formatterCurrency'
import React from 'react'

type Props = {
    item: Cart
}

export const CartItem = ({item}: Props) => {
  return (
    <div className='flex items-center gap-5'>
        <div className='w-16 overflow-hidden'>
            <img className='w-full h-auto object-cover' src={item.product.image} alt={item.product.name} />
       </div>
       <div className='flex-1'>
        <p className='tex-md'>{item.product.name}</p>
        <p className='text-xs opacity-50'>{formatCurrency(item.product.price)}</p>
       </div>
       <div className='flex-1'>
        ....
       </div>
    </div>
  )
}
