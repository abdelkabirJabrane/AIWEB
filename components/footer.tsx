import Link from "next/link"
import { Sparkles } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  categories: [
    { name: "AI Coding Assistants", href: "/category/ai-coding-assistants" },
    { name: "AI Content Creation", href: "/category/ai-content-creation" },
    { name: "AI Automation Tools", href: "/category/ai-automation-tools" },
    { name: "AI Productivity Tools", href: "/category/ai-productivity-tools" },
    { name: "AI Business Tools", href: "/category/ai-business-tools" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Comparisons", href: "/comparisons" },
    { name: "Reviews", href: "/reviews" },
    { name: "Newsletter", href: "/newsletter" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">AI Tools Hub</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md mb-6">
              Your comprehensive guide to the best AI tools for developers, freelancers, startups, and small businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} AI Tools Hub. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Some links on this site may be affiliate links. This helps support our work at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  )
}
