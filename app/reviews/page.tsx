import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'AI Tool Reviews - Comprehensive Reviews & Ratings',
  description: 'Browse our complete collection of AI tool reviews with in-depth analysis, ratings, and recommendations.',
};

const tools = [
  { name: 'Cursor AI', slug: 'cursor-ai', category: 'AI Coding', rating: 4.9, pricing: 'From $20/mo', description: 'AI-first code editor for 10x productivity', featured: true },
  { name: 'GitHub Copilot', slug: 'github-copilot', category: 'AI Coding', rating: 4.8, pricing: 'From $10/mo', description: 'AI pair programmer for code suggestions', featured: true },
  { name: 'ChatGPT', slug: 'chatgpt', category: 'AI Content', rating: 4.7, pricing: 'Freemium', description: 'Advanced AI for content, coding, and analysis', featured: true },
  { name: 'Claude AI', slug: 'claude-ai', category: 'AI Content', rating: 4.8, pricing: 'Freemium', description: 'Constitutional AI with 200K context', featured: true },
];

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-muted/30 border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-4">AI Tool Reviews</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive, unbiased reviews of the best AI tools for developers, creators, and businesses.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {tools.map((tool) => (
                <Link key={tool.slug} href={`/reviews/${tool.slug}`}>
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 group">
                    <CardContent className="p-6">
                      <Badge className="mb-4 bg-primary/10 text-primary border-0">{tool.category}</Badge>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{tool.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{tool.rating}</span>
                        </div>
                        <Badge variant="outline">{tool.pricing}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
