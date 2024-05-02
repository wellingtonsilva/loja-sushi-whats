import { useCheckoutStore } from '@/stores/checkout-store'
import Link from 'next/link';
import React from 'react'
import { Button } from '@/components/ui/button';
import { generateMessage } from '@/lib/generateMessage';
import { CheckoutSteps } from '@/types/checkoutSteps';

type Props = {
    setStep: React.Dispatch<React.SetStateAction<CheckoutSteps>>
}

export const StepFinish = ({setStep}:Props) => {

    const {name} = useCheckoutStore(state => state);
    const whatsApp = 5511966749107
    const message = generateMessage();
    const linkZap = `https://wa.me/${whatsApp}?text=${encodeURI(message)}`

  return (
    <div className='flex flex-col gap-5 text-center'>
        <p>Perfeito <strong>{name}</strong></p>
        <p>Envie seu pedido ao nosso WhatsApp para concluir. Nosso atendente irá te guiar sobre o andamento do pedido.</p>
        <div className='flex justify-between mt-5'>
        <Button type="submit" variant='link' onClick={() => setStep('address')}>Voltar</Button>
        <Button>
            <Link target='_blank' href={linkZap}>Enviar para o WhatsApp</Link>
        </Button>
        </div>
        
    </div>
  )
}
