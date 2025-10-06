import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GridProps {
  children: ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4 | 5 | 6
  gap?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Grid({ 
  children, 
  className, 
  cols = 3, 
  gap = 'md' 
}: GridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
  }

  const gridGap = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  }

  return (
    <div className={cn(
      'grid',
      gridCols[cols],
      gridGap[gap],
      className
    )}>
      {children}
    </div>
  )
}

interface GridItemProps {
  children: ReactNode
  className?: string
  span?: 1 | 2 | 3 | 4 | 5 | 6
}

export function GridItem({ 
  children, 
  className, 
  span = 1 
}: GridItemProps) {
  const spanClasses = {
    1: 'col-span-1',
    2: 'col-span-1 md:col-span-2',
    3: 'col-span-1 md:grid-cols-2 lg:col-span-3',
    4: 'col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4',
    5: 'col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-5',
    6: 'col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-6'
  }

  return (
    <div className={cn(spanClasses[span], className)}>
      {children}
    </div>
  )
}