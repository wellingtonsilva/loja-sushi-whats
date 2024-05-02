"use client"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { RocketIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { useCartStore } from '@/stores/cart-store'
import { formatCurrency } from '@/utils/formatterCurrency'
import { CartItem } from '@/components/cart/cartItem'
import { CheckoutDialog } from '@/components/checkout/dialog'


export const Sidebar = () => {

    const [checkotOpen, setCheckoutOpen] = useState(false)

    const {cart, upsertCartItem} = useCartStore(state => state) 

    let subTotal = 0
    for(let item of cart){
        subTotal += item.quantity * item.product.price
    }

  return (
    <div>
        <Sheet>
        <SheetTrigger asChild>
            <Button className='relative'>
                <RocketIcon className='mr-2' />
                <p>Carrinho</p>
                {cart.length > 0 && 
                    <div className='absolute flex items-center justify-center font-bold size-6 bg-green-600 rounded-full -right-3 -top-2'>{cart.length}</div>
                }
            </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>Carrinho</SheetTitle>
                {/* <SheetDescription>
                    Descrição
                </SheetDescription> */}
            </SheetHeader>

            <div className='flex flex-col gap-5 my-3'>
                {cart.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                        
                ))}
            </div>

            <Separator className='my-4' />

            <div className='flex justify-between items-center tex-x5'>
                <div>Subtotal:</div>
                <div>{formatCurrency(subTotal)}</div>
            </div>

            <Separator className='my-4' />

            <div className='text-center'>
                <Button
                    disabled={cart.length === 0}
                    onClick={() => setCheckoutOpen(true) }
                >
                    Finalizar
                </Button>
            </div>

            <CheckoutDialog open={checkotOpen} onOpenChange={setCheckoutOpen} />

        </SheetContent>
        </Sheet>

    </div>
  )
}
