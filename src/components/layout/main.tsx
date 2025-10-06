import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MainProps {
  children: ReactNode
  className?: string
  sidebar?: boolean
}

export function Main({ children, className, sidebar = false }: MainProps) {
  return (
    <main className={cn(
      'flex-1 transition-all duration-200',
      sidebar ? 'md:ml-64' : '',
      className
    )}>
      <div className="container mx-auto px-4 py-6">
        {children}
      </div>
    </main>
  )
}