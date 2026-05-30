"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const mainNav = [
  { name: "Reviews", href: "/reviews" },
  { name: "Comparisons", href: "/comparisons" },
  { name: "Blog", href: "/blog" },
  { name: "Categories", href: "/reviews" },
]

const categoryNav = [
  { name: "Coding", href: "/category/ai-coding-assistants" },
  { name: "Content", href: "/category/ai-content-creation" },
  { name: "Automation", href: "/category/ai-automation-tools" },
  { name: "Productivity", href: "/category/ai-productivity-tools" },
  { name: "Business", href: "/category/ai-business-tools" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">AI Tools Hub</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {mainNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search AI tools..."
                className="w-64 pl-9"
              />
            </div>
          </div>

          <ThemeToggle />

          <Button asChild className="hidden md:inline-flex">
            <Link href="/newsletter">Subscribe</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="flex flex-col gap-6 mt-8">
                <div className="flex flex-col gap-3">
                  <h3 className="font-semibold">Navigation</h3>
                  {mainNav.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-semibold">Categories</h3>
                  {categoryNav.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <Button asChild className="mt-4">
                  <Link href="/newsletter" onClick={() => setIsOpen(false)}>
                    Subscribe to Newsletter
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="border-t hidden md:block">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-6 h-10">
            {categoryNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
