import { useCartStore } from '@/stores/cart-store';
import { Cart } from '@/types/cart'
import React from 'react'
import { Button } from '../ui/button';
import { MinusIcon, PlusIcon } from 'lucide-react';

type Props = {
    cartItem: Cart;
}

export const ItemQuantity = ({cartItem}: Props) => {

    const {upsertCartItem} = useCartStore(state => state)

    const handleMinusButton = () => {
        upsertCartItem(cartItem.product, -1)
    }

    const handlePlusButton = () => {
        upsertCartItem(cartItem.product, 1)
    }

  return (
    <div className='flex items-center gap-2'>
        <Button 
            variant='outline' 
            size="icon" 
            className='size-6'
            onClick={handleMinusButton}
        >
           <MinusIcon className='size-3' />
        </Button>
        {cartItem.quantity}
        <Button variant='outline' size="icon" className='size-6' onClick={handlePlusButton}>
            <PlusIcon className='size-3' />
        </Button>
    </div>
  )
}
