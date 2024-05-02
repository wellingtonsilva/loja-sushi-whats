"use client"
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Progress } from "@/components/ui/progress"
import { StepUser } from '@/components/checkout/stepUser'
import { StepFinish } from '@/components/checkout/stepFinish'
import { StepAddress } from '@/components/checkout/stepAddress'
import { CheckoutSteps } from '@/types/checkoutSteps'

type Props = {
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
}

export const CheckoutDialog = ({open, onOpenChange}: Props) => {

    const [step, setStep] = useState<CheckoutSteps>('user')

    let progressPercentage = 0
    switch(step) {
        case 'user':
        progressPercentage = 33;
        break;
        case 'address':
        progressPercentage = 66;
        break;
        case 'finish':
        progressPercentage = 100;
        break;
    }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    {step === 'user' && 'Dados Pessoais'}
                    {step === 'address' && 'Endereço de Entrega'}
                    {step === 'finish' && 'Envio para WhatsApp'}
                </DialogTitle>
            </DialogHeader>
            <Progress value={progressPercentage} />
            <div className='flex flex-col gap-3'>
                {step === 'user' && <StepUser setStep={setStep} /> }
                {step === 'address' && <StepAddress setStep={setStep} /> }
                {step === 'finish' && <StepFinish setStep={setStep} /> }
            </div> 
        </DialogContent>
    </Dialog>
  )
}

