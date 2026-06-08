import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Check, X } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const comparisons: Record<string, any> = {
  'cursor-vs-github-copilot': {
    title: 'Cursor vs GitHub Copilot',
    tool1: 'Cursor',
    tool2: 'GitHub Copilot',
    winner: 'Cursor',
    summary: 'Cursor offers superior codebase understanding, while GitHub Copilot provides better IDE compatibility.',
    features: [
      { name: 'Code Completion', t1: true, t2: true },
      { name: 'Multi-file Editing', t1: true, t2: false },
      { name: 'IDE Integration', t1: 'Standalone', t2: 'All IDEs' },
    ],
  },
  'chatgpt-vs-claude': {
    title: 'ChatGPT vs Claude',
    tool1: 'ChatGPT',
    tool2: 'Claude',
    winner: 'Tie',
    summary: 'Both are excellent. ChatGPT has more features, Claude has better reasoning.',
    features: [
      { name: 'Context Length', t1: '32K', t2: '200K' },
      { name: 'Image Generation', t1: true, t2: false },
      { name: 'Reasoning', t1: 'Good', t2: 'Excellent' },
    ],
  },
};

interface ComparisonPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ComparisonPageProps): Promise<Metadata> {
  const comparison = comparisons[params.slug];
  if (!comparison) return { title: 'Comparison Not Found' };
  return { title: `${comparison.title} - Detailed Comparison` };
}

export async function generateStaticParams() {
  return Object.keys(comparisons).map((slug) => ({ slug }));
}

export default function ComparisonPage({ params }: ComparisonPageProps) {
  const comparison = comparisons[params.slug];
  if (!comparison) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-muted/30 border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-4">{comparison.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{comparison.summary}</p>
            <Badge className="bg-yellow-100 text-yellow-800">Winner: {comparison.winner}</Badge>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Feature Comparison</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-semibold">Feature</th>
                        <th className="text-center p-4 font-semibold">{comparison.tool1}</th>
                        <th className="text-center p-4 font-semibold">{comparison.tool2}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {comparison.features.map((row: any, idx: number) => (
                        <tr key={idx} className="hover:bg-muted/30">
                          <td className="p-4 font-medium">{row.name}</td>
                          <td className="p-4 text-center">
                            {typeof row.t1 === 'boolean' ? (
                              row.t1 ? <Check className="h-5 w-5 mx-auto text-green-600" /> : <X className="h-5 w-5 mx-auto text-red-600" />
                            ) : (
                              <span className="text-sm">{row.t1}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof row.t2 === 'boolean' ? (
                              row.t2 ? <Check className="h-5 w-5 mx-auto text-green-600" /> : <X className="h-5 w-5 mx-auto text-red-600" />
                            ) : (
                              <span className="text-sm">{row.t2}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-blue-500/5">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Final Verdict</h3>
                <p className="text-muted-foreground mb-6">{comparison.summary}</p>
                <Separator className="mb-6" />
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href={`/reviews/${comparison.tool1.toLowerCase().replace(' ', '-')}`}>
                      Learn about {comparison.tool1}
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/reviews/${comparison.tool2.toLowerCase().replace(' ', '-')}`}>
                      Learn about {comparison.tool2}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
