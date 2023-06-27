'use client'

import { useRouter } from 'next/navigation'
import { IoArrowBackCircleOutline } from 'react-icons/io5'

import { Button } from './BackButton.styles'

interface IBackButtonProps {
  navigate: string
}

export function BackButton({ navigate }: IBackButtonProps) {
  const router = useRouter()

  const handleNavigate = () => {
    router.push(navigate)
  }

  return (
    <Button onClick={handleNavigate}>
      <IoArrowBackCircleOutline />
      Back
    </Button>
  )
}
