'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Home,
  Search,
  Compass,
  Heart,
  MessageCircle,
  User,
  Settings,
  Bookmark,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ className, isOpen = false, onClose }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('home')

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home, href: '/' },
    { id: 'explore', label: 'Explore', icon: Compass, href: '/explore' },
    { id: 'trending', label: 'Trending', icon: TrendingUp, href: '/trending' },
    { id: 'following', label: 'Following', icon: Users, href: '/following' },
  ]

  const userItems = [
    { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
    { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark, href: '/bookmarks' },
    { id: 'settings', label: 'Settings', icon: Settings, href: '/settings' },
  ]

  const quickActions = [
    { id: 'create', label: 'Create Project', icon: Zap, href: '/project/new', variant: 'default' as const },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        'fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-64 transform border-r bg-background transition-transform duration-200 ease-in-out md:relative md:top-0 md:h-screen md:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        className
      )}>
        <div className="flex h-full flex-col">
          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {/* Main Navigation */}
            <div className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.id}
                    variant={activeItem === item.id ? 'secondary' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setActiveItem(item.id)}
                  >
                    <Icon className="mr-3 h-4 w-4" />
                    {item.label}
                    {item.id === 'following' && (
                      <Badge variant="secondary" className="ml-auto text-xs">
                        12
                      </Badge>
                    )}
                  </Button>
                )
              })}
            </div>

            {/* Divider */}
            <div className="my-4 border-t" />

            {/* User Navigation */}
            <div className="space-y-1">
              <p className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Your Space
              </p>
              {userItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    <Icon className="mr-3 h-4 w-4" />
                    {item.label}
                  </Button>
                )
              })}
            </div>

            {/* Divider */}
            <div className="my-4 border-t" />

            {/* Quick Actions */}
            <div className="space-y-1">
              <p className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Quick Actions
              </p>
              {quickActions.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.id}
                    variant={item.variant}
                    className="w-full justify-start"
                  >
                    <Icon className="mr-3 h-4 w-4" />
                    {item.label}
                  </Button>
                )
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t p-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Online</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Echo v0.1.0
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}