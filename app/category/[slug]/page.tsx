import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Code, PenTool, Bot, Zap, Briefcase } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const categoryData: Record<string, { name: string; description: string; icon: any }> = {
  'ai-coding-assistants': {
    name: 'AI Coding Assistants',
    description: 'AI-powered coding tools that write, debug, and explain code. Boost your productivity with intelligent code suggestions and automated programming assistance.',
    icon: Code,
  },
  'ai-content-creation': {
    name: 'AI Content Creation',
    description: 'Generate blog posts, marketing copy, images, and videos with AI. Create high-quality content in minutes instead of hours.',
    icon: PenTool,
  },
  'ai-automation-tools': {
    name: 'AI Automation Tools',
    description: 'Automate workflows and repetitive tasks with AI. Save time and reduce errors with intelligent automation solutions.',
    icon: Bot,
  },
  'ai-productivity-tools': {
    name: 'AI Productivity Tools',
    description: 'Boost your productivity with AI-powered assistants. Manage tasks, schedule meetings, and organize your work more efficiently.',
    icon: Zap,
  },
  'ai-business-tools': {
    name: 'AI Business Tools',
    description: 'AI solutions for analytics, CRM, and business operations. Make data-driven decisions and optimize your business processes.',
    icon: Briefcase,
  },
};

const toolsData: Record<string, Array<{
  name: string;
  slug: string;
  description: string;
  rating: number;
  pricing: string;
  featured: boolean;
}>> = {
  'ai-coding-assistants': [
    { name: 'Cursor AI', slug: 'cursor-ai', description: 'The AI-first code editor that makes you 10x more productive', rating: 4.9, pricing: 'From $20/mo', featured: true },
    { name: 'GitHub Copilot', slug: 'github-copilot', description: 'AI pair programmer with intelligent code suggestions', rating: 4.8, pricing: 'From $10/mo', featured: true },
    { name: 'Tabnine', slug: 'tabnine', description: 'AI code completion supporting multiple languages and IDEs', rating: 4.5, pricing: 'Freemium', featured: false },
  ],
  'ai-content-creation': [
    { name: 'ChatGPT', slug: 'chatgpt', description: 'Advanced AI for content creation and analysis', rating: 4.7, pricing: 'Freemium', featured: true },
    { name: 'Claude AI', slug: 'claude-ai', description: 'Constitutional AI with superior reasoning', rating: 4.8, pricing: 'Freemium', featured: true },
    { name: 'Jasper AI', slug: 'jasper-ai', description: 'Specialized AI for marketing copy', rating: 4.6, pricing: 'From $49/mo', featured: false },
  ],
  'ai-automation-tools': [
    { name: 'Zapier', slug: 'zapier', description: 'Connect apps and automate workflows', rating: 4.8, pricing: 'Freemium', featured: true },
    { name: 'Make', slug: 'make', description: 'Visual workflow automation platform', rating: 4.7, pricing: 'Freemium', featured: false },
  ],
  'ai-productivity-tools': [
    { name: 'Notion AI', slug: 'notion-ai', description: 'AI-powered workspace for teams', rating: 4.7, pricing: 'From $10/mo', featured: true },
    { name: 'Otter.ai', slug: 'otter-ai', description: 'AI meeting transcription', rating: 4.6, pricing: 'Freemium', featured: false },
  ],
  'ai-business-tools': [
    { name: 'Salesforce Einstein', slug: 'salesforce-einstein', description: 'AI-powered CRM with analytics', rating: 4.6, pricing: 'Custom', featured: true },
    { name: 'Tableau AI', slug: 'tableau-ai', description: 'Business intelligence with AI insights', rating: 4.7, pricing: 'From $15/mo', featured: false },
  ],
};

interface CategoryPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categoryData[params.slug];
  if (!category) return { title: 'Category Not Found' };
  return {
    title: category.name,
    description: category.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({ slug }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categoryData[params.slug];
  const tools = toolsData[params.slug] || [];

  if (!category) notFound();

  const Icon = category.icon;
  const featuredTools = tools.filter(t => t.featured);
  const regularTools = tools.filter(t => !t.featured);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-muted/30 border-b">
          <div className="container mx-auto px-4 py-12">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">{category.description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            {featuredTools.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mb-6">Featured Tools</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                  {featuredTools.map((tool) => (
                    <Link key={tool.slug} href={`/reviews/${tool.slug}`}>
                      <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 group">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge className="bg-primary/10 text-primary border-0">Featured</Badge>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-semibold">{tool.rating}</span>
                            </div>
                          </div>
                          <CardTitle className="group-hover:text-primary transition-colors">{tool.name}</CardTitle>
                          <CardDescription className="line-clamp-3">{tool.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between mb-4">
                            <Badge variant="outline">{tool.pricing}</Badge>
                          </div>
                          <Button className="w-full">
                            Read Review <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </>
            )}

            {regularTools.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mb-6">All Tools</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {regularTools.map((tool) => (
                    <Link key={tool.slug} href={`/reviews/${tool.slug}`}>
                      <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 group">
                        <CardContent className="p-4">
                          <CardTitle className="mb-2 group-hover:text-primary">{tool.name}</CardTitle>
                          <CardDescription className="mb-4">{tool.description}</CardDescription>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{tool.rating}</span>
                            </div>
                            <Badge variant="outline">{tool.pricing}</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
