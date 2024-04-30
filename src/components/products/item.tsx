"use client"
import { Product } from '@/types/product'
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utils/formatterCurrency';
import { toast, useToast } from '@/components/ui/use-toast';
import {ToastAction} from '@/components/ui/toast'

type Props ={
    item: Product;
}
export const ProductItem = ({item}: Props) => {

    const {} = useToast()

    const handleAddButton = () => {
        // adicionar no store
        toast({
            title:'Adicionado ao carrinho',
            description: item.name,
            action: <ToastAction altText='fechar'> Fechar</ToastAction>
        })
    }

  return (
    <div>
        <div className='rounded-md overflow-hidden'>   
            <img
                className='w-full h-32 object-cover' 
                src={item.image} 
                alt={item.name} 
            />
            <div className='flex mt-3 flex-col gap-2'>
                <p className='text-lg'>{item.name}</p>
                <p className='text-sm opacity-60'>{formatCurrency(item.price)}</p>
                <Button variant="outline" onClick={handleAddButton}>Adcionar</Button>
            </div>
            
        </div>
    </div>
  )
}
