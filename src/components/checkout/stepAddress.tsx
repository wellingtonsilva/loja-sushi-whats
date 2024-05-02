import { CheckoutSteps } from "@/types/checkoutSteps"

type Props = {
    setStep: React.Dispatch<React.SetStateAction<CheckoutSteps>>
}

export const StepAddress = ({setStep}: Props) => {
  return (
    <div>StepAddress</div>
  )
}
