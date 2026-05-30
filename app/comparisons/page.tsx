import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'AI Tool Comparisons - Side-by-Side Reviews',
  description: 'Compare AI tools side-by-side with detailed feature analysis.',
};

const comparisons = [
  {
    title: 'Cursor vs GitHub Copilot',
    slug: 'cursor-vs-github-copilot',
    tool1: 'Cursor',
    tool2: 'GitHub Copilot',
    category: 'Coding',
    winner: 'Cursor',
    description: 'Battle of the AI code editors.',
  },
  {
    title: 'ChatGPT vs Claude',
    slug: 'chatgpt-vs-claude',
    tool1: 'ChatGPT',
    tool2: 'Claude',
    category: 'AI Assistants',
    winner: 'Tie',
    description: 'OpenAI vs Anthropic comparison.',
  },
];

export default function ComparisonsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-muted/30 border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-4">AI Tool Comparisons</h1>
            <p className="text-lg text-muted-foreground">Side-by-side comparisons to help you decide.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2">
              {comparisons.map((comparison) => (
                <Link key={comparison.slug} href={`/comparisons/${comparison.slug}`}>
                  <Card className="h-full transition-all hover:shadow-lg group">
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">{comparison.category}</Badge>
                      <CardTitle className="group-hover:text-primary">{comparison.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{comparison.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="font-medium">{comparison.tool1}</span>
                          <span className="mx-2 text-muted-foreground">vs</span>
                          <span className="font-medium">{comparison.tool2}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          Compare <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
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
