import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Check, Zap, Shield, Users, Sparkles, Code, PenTool, Bot, Briefcase, TrendingUp } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'AI Tools Hub - Best AI Tools for Developers & Businesses',
  description: 'Discover and compare the best AI tools for developers, freelancers, startups, and small businesses. In-depth reviews, tutorials, and recommendations.',
};

const featuredTools = [
  {
    name: 'Cursor AI',
    slug: 'cursor-ai',
    category: 'AI Coding',
    rating: 4.9,
    pricing: 'From $20/mo',
    description: 'The AI-first code editor that makes you 10x more productive',
    logo: 'https://images.pexels.com/photo-1461749280684-cc280935f30b?w=400',
  },
  {
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    category: 'AI Coding',
    rating: 4.8,
    pricing: 'From $10/mo',
    description: 'Your AI pair programmer that suggests whole lines or entire functions',
    logo: 'https://images.pexels.com/photo-1461749280684-cc280935f30b?w=400',
  },
  {
    name: 'ChatGPT',
    slug: 'chatgpt',
    category: 'AI Content',
    rating: 4.7,
    pricing: 'Freemium',
    description: 'Advanced AI assistant for content creation, coding, and analysis',
    logo: 'https://images.pexels.com/photo-1486312338219-ce68d2c7f836?w=400',
  },
  {
    name: 'Claude AI',
    slug: 'claude-ai',
    category: 'AI Content',
    rating: 4.8,
    pricing: 'Freemium',
    description: 'Constitutional AI by Anthropic for helpful, harmless, and honest responses',
    logo: 'https://images.pexels.com/photo-1486312338219-ce68d2c7f836?w=400',
  },
];

const categories = [
  {
    name: 'AI Coding Assistants',
    slug: 'ai-coding-assistants',
    description: 'AI-powered coding tools that write, debug, and explain code',
    icon: Code,
    count: '12 tools',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'AI Content Creation',
    slug: 'ai-content-creation',
    description: 'Generate blog posts, copy, images, and videos with AI',
    icon: PenTool,
    count: '18 tools',
    gradient: 'from-orange-500 to-pink-500',
  },
  {
    name: 'AI Automation Tools',
    slug: 'ai-automation-tools',
    description: 'Automate workflows and repetitive tasks with AI',
    icon: Bot,
    count: '15 tools',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    name: 'AI Productivity Tools',
    slug: 'ai-productivity-tools',
    description: 'Boost your productivity with AI-powered assistants',
    icon: Zap,
    count: '20 tools',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'AI Business Tools',
    slug: 'ai-business-tools',
    description: 'AI solutions for analytics, CRM, and business operations',
    icon: Briefcase,
    count: '14 tools',
    gradient: 'from-indigo-500 to-blue-500',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Senior Developer',
    company: 'TechCorp',
    content: 'Cursor AI has completely transformed how I write code. What used to take hours now takes minutes. The AI suggestions are incredibly accurate.',
    rating: 5,
  },
  {
    name: 'Mike Johnson',
    role: 'Content Strategist',
    company: 'StartupXYZ',
    content: 'This website helped me find the perfect AI tools for my content workflow. The comparisons saved me weeks of research.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Freelance Designer',
    company: 'Creative Studio',
    content: 'The detailed reviews and honest pros/cons helped me choose the right tools without wasting money on subscriptions I didn\'t need.',
    rating: 5,
  },
];

const stats = [
  { icon: Users, value: '50K+', label: 'Monthly Readers' },
  { icon: Star, value: '150+', label: 'AI Tools Reviewed' },
  { icon: Shield, value: '100%', label: 'Unbiased Reviews' },
  { icon: TrendingUp, value: '50%', label: 'Avg. Productivity Boost' },
];

const latestArticles = [
  {
    title: 'Cursor vs GitHub Copilot: Which AI Code Assistant is Better in 2024?',
    slug: 'cursor-vs-github-copilot',
    excerpt: 'A comprehensive comparison of the two leading AI coding assistants...',
    category: 'Coding',
    readTime: '8 min',
  },
  {
    title: '10 AI Tools That Will 10x Your Productivity in 2024',
    slug: '10-ai-tools-productivity',
    excerpt: 'Discover the AI tools that are transforming how developers and creators work...',
    category: 'Productivity',
    readTime: '12 min',
  },
  {
    title: 'ChatGPT vs Claude: The Ultimate Comparison Guide',
    slug: 'chatgpt-vs-claude',
    excerpt: 'Which AI assistant is right for your needs? We break down features, pricing, and use cases...',
    category: 'AI Assistants',
    readTime: '10 min',
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-700" />

          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm mb-8 bg-background/95 backdrop-blur">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="font-medium">Over 150 AI tools reviewed & compared</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Find the Best{' '}
                <span className="gradient-text">AI Tools</span>
                <br />
                for Your Workflow
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Unbiased reviews, detailed comparisons, and expert recommendations for developers, freelancers, and businesses.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild className="h-12 px-8">
                  <Link href="/reviews">
                    Browse All Tools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-12 px-8">
                  <Link href="/comparisons">
                    Compare Tools
                  </Link>
                </Button>
              </div>

              <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="h-5 w-5 mx-auto mb-1 text-primary" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tools Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured AI Tools</h2>
                <p className="text-muted-foreground">Top-rated AI tools loved by developers and creators</p>
              </div>
              <Button variant="outline" asChild className="hidden md:flex">
                <Link href="/reviews">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featuredTools.map((tool) => (
                <Link key={tool.slug} href={`/reviews/${tool.slug}`}>
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="h-12 w-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                          <Code className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <Badge variant="secondary">{tool.category}</Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {tool.name}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{tool.rating}</span>
                        </div>
                        <Badge variant="outline" className="font-normal">
                          {tool.pricing}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" asChild>
                <Link href="/reviews">
                  View All Tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore by Category</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse our comprehensive collection of AI tools organized by use case
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <Card className="h-full transition-all hover:shadow-lg group">
                    <CardContent className="pt-6">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.gradient} mb-4`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {category.description}
                      </p>
                      <Badge variant="secondary">{category.count}</Badge>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Quick Comparison</h2>
              <p className="text-muted-foreground">See how the top AI tools compare at a glance</p>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr className="bg-muted/50">
                        <th className="text-left p-4 font-semibold">Tool</th>
                        <th className="text-left p-4 font-semibold">Rating</th>
                        <th className="text-left p-4 font-semibold">Pricing</th>
                        <th className="text-left p-4 font-semibold">Best For</th>
                        <th className="text-left p-4 font-semibold">Free Trial</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {featuredTools.map((tool) => (
                        <tr key={tool.slug} className="hover:bg-muted/50 transition-colors">
                          <td className="p-4">
                            <Link href={`/reviews/${tool.slug}`} className="font-semibold hover:text-primary">
                              {tool.name}
                            </Link>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{tool.rating}</span>
                            </div>
                          </td>
                          <td className="p-4 text-muted-foreground">{tool.pricing}</td>
                          <td className="p-4 text-muted-foreground">{tool.category}</td>
                          <td className="p-4">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800">
                              <Check className="h-3 w-3 mr-1" />
                              Yes
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link href="/comparisons">
                  See All Comparisons
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Readers Say</h2>
              <p className="text-muted-foreground">Join thousands of developers and creators who trust our reviews</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mb-4 text-muted-foreground">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-br from-primary/5 via-cyan-500/5 to-blue-500/5 border-primary/20">
              <CardContent className="p-8 md:p-12 text-center">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl font-bold mb-4">Stay Ahead of the AI Curve</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Get weekly updates on the latest AI tools, industry insights, and exclusive reviews delivered to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Latest Articles Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
                <p className="text-muted-foreground">In-depth guides and comparisons</p>
              </div>
              <Button variant="outline" asChild className="hidden md:flex">
                <Link href="/blog">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {latestArticles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <Card className="h-full transition-all hover:shadow-lg group">
                    <CardContent className="pt-6">
                      <Badge variant="secondary" className="mb-4">{article.category}</Badge>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                      <div className="text-sm text-muted-foreground">{article.readTime} read</div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
