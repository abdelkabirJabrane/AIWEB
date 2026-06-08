import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Blog - AI Tools Insights & Guides',
  description: 'In-depth articles, tutorials, and guides about AI tools.',
};

const articles = [
  { title: 'Cursor vs GitHub Copilot', slug: 'cursor-vs-github-copilot', category: 'Coding', readTime: '8 min', date: '2024-01-15' },
  { title: '10 AI Tools for Productivity', slug: 'ai-tools-productivity', category: 'Productivity', readTime: '12 min', date: '2024-01-10' },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-muted/30 border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-4">AI Tools Blog</h1>
            <p className="text-lg text-muted-foreground">In-depth guides and comparisons.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="space-y-6">
              {articles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <Card className="transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-2">{article.category}</Badge>
                      <h3 className="text-xl font-semibold mb-2 hover:text-primary">{article.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
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
