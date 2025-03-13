import { cn } from '@/lib/utils';
import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string
}

const PaddedDiv: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn(
        "lg:px-20 md:px-10 sm:px-5 p-2",
        className
    )}>
        {children}
    </div>
  )
}

export default PaddedDiv