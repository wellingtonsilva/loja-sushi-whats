import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import React from 'react'
import { Button } from '@/components/ui/button'
import { RocketIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export const Sidebar = () => {
  return (
    <div>
        <Sheet>
        <SheetTrigger asChild>
            <Button>
                <RocketIcon className='mr-2' />
                <p>Carrinho</p>
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
                ...
            </div>

            <Separator className='my-4' />

            <div className='flex justify-between items-center tex-x5'>
                <div>Subtotal:</div>
                <div>...</div>
            </div>

            <Separator className='my-4' />

            <div className='text-center'>
                <Button>Finalizar</Button>
            </div>

        </SheetContent>
        </Sheet>

    </div>
  )
}
