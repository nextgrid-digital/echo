'use client'

import { useState } from 'react'
import { Header } from './header'
import { Sidebar } from './sidebar'
import { Main } from './main'
import { Footer } from './footer'
import { cn } from '@/lib/utils'

interface LayoutProps {
  children: React.ReactNode
  className?: string
  showSidebar?: boolean
  showFooter?: boolean
}

export function Layout({ 
  children, 
  className, 
  showSidebar = false, 
  showFooter = true 
}: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className={cn('min-h-screen bg-background', className)}>
      <Header />
      
      <div className="flex">
        {showSidebar && (
          <Sidebar 
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        )}
        
        <Main sidebar={showSidebar}>
          {children}
        </Main>
      </div>
      
      {showFooter && <Footer />}
    </div>
  )
}