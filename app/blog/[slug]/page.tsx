import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const articles: Record<string, any> = {
  'cursor-vs-github-copilot': {
    title: 'Cursor vs GitHub Copilot: Which is Better?',
    category: 'Coding',
    readTime: '8 min',
    date: '2024-01-15',
    author: 'Alex Thompson',
    content: 'A comprehensive comparison of the two leading AI coding assistants.',
  },
  'ai-tools-productivity': {
    title: '10 AI Tools for Productivity',
    category: 'Productivity',
    readTime: '12 min',
    date: '2024-01-10',
    author: 'Sarah Chen',
    content: 'Discover the AI tools that are transforming productivity.',
  },
};

interface BlogPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const article = articles[params.slug];
  if (!article) return { title: 'Article Not Found' };
  return { title: article.title, description: article.content };
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const article = articles[params.slug];
  if (!article) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <article className="py-12">
          <div className="container mx-auto px-4">
            <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">{article.category}</Badge>
              <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold">{article.author.charAt(0)}</div>
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(article.date).toLocaleDateString()}
                </div>
              </div>

              <Separator className="mb-8" />

              <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
                <p>{article.content}</p>
                <p>This is a sample article. In a production environment, you would have full article content here with proper formatting, images, and detailed sections.</p>
              </div>

              <Card className="bg-gradient-to-br from-primary/5 to-blue-500/5 p-6">
                <h3 className="font-semibold mb-2">Want more AI insights?</h3>
                <p className="text-sm text-muted-foreground mb-4">Subscribe to our newsletter for weekly updates.</p>
                <Button asChild>
                  <Link href="/newsletter">Subscribe</Link>
                </Button>
              </Card>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
