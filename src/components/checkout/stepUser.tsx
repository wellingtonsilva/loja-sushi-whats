"use client"
import { CheckoutSteps } from "@/types/checkoutSteps"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'

import { useCheckoutStore } from "@/stores/checkout-store"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type Props = {
    setStep: React.Dispatch<React.SetStateAction<CheckoutSteps>>
}

const formSchema = z.object({
    name: z.string().min(2, 'Preencha seu Nome')
})

export const StepUser = ({setStep}: Props) => {

    const {name, setName} = useCheckoutStore(state => state)


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) =>  {
        setName(values.name)
        setStep('address')
    }

  return (
   <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField 
        control={form.control}
        name="name"
        render={({field}) => (
            <FormItem>
                <FormLabel>Seu Nome:</FormLabel>
                <FormControl>
                    <Input
                        placeholder="Qual seu Nome?"
                        {...field}
                        autoFocus
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        />
        <Button type="submit">Próximo</Button>
    </form>
   </Form>
  )
}
