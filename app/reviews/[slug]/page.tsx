import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Check, X, ExternalLink, Star, DollarSign, Clock, Globe } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const reviewData: Record<string, {
  name: string;
  rating: number;
  pricing: string;
  website: string;
  pros: string[];
  cons: string[];
  features: { name: string; included: boolean }[];
}> = {
  'cursor-ai': {
    name: 'Cursor AI',
    rating: 4.9,
    pricing: 'From $20/mo',
    website: 'https://cursor.sh',
    pros: ['Superior codebase understanding', 'Multi-file AI editing', 'VS Code extensions support'],
    cons: ['Higher cost than alternatives', 'Requires learning new editor'],
    features: [
      { name: 'Code Completion', included: true },
      { name: 'Codebase Chat', included: true },
      { name: 'Multi-file Editing', included: true },
      { name: 'Privacy Mode', included: true },
    ],
  },
  'github-copilot': {
    name: 'GitHub Copilot',
    rating: 4.8,
    pricing: 'From $10/mo',
    website: 'https://github.com/features/copilot',
    pros: ['Works in existing IDEs', 'Lower price point', 'Free for students'],
    cons: ['Limited codebase context', 'Privacy concerns'],
    features: [
      { name: 'Code Completion', included: true },
      { name: 'Chat Interface', included: true },
      { name: 'IDE Integration', included: true },
      { name: 'Enterprise Support', included: false },
    ],
  },
  'chatgpt': {
    name: 'ChatGPT',
    rating: 4.7,
    pricing: 'Freemium',
    website: 'https://chat.openai.com',
    pros: ['Versatile use cases', 'Strong language understanding', 'Image generation'],
    cons: ['Can hallucinate', 'Privacy concerns'],
    features: [
      { name: 'Text Generation', included: true },
      { name: 'Code Assistance', included: true },
      { name: 'Image Generation', included: true },
      { name: 'API Access', included: true },
    ],
  },
  'claude-ai': {
    name: 'Claude AI',
    rating: 4.8,
    pricing: 'Freemium',
    website: 'https://anthropic.com/claude',
    pros: ['Large context window', 'Thoughtful responses', 'Less hallucination'],
    cons: ['No image generation', 'Fewer customization options'],
    features: [
      { name: 'Long Context', included: true },
      { name: 'Document Analysis', included: true },
      { name: 'Code Generation', included: true },
      { name: 'Vision', included: true },
    ],
  },
};

interface ReviewPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const review = reviewData[params.slug];
  if (!review) return { title: 'Review Not Found' };
  return {
    title: `${review.name} Review - Features, Pricing & Alternatives`,
    description: `In-depth ${review.name} review with features, pricing, pros & cons, and alternatives.`,
  };
}

export async function generateStaticParams() {
  return Object.keys(reviewData).map((slug) => ({ slug }));
}

export default function ReviewPage({ params }: ReviewPageProps) {
  const review = reviewData[params.slug];
  if (!review) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-muted/30 border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-2">{review.name}</h1>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(review.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 font-semibold">{review.rating}</span>
              </div>
              <Badge variant="secondary">{review.pricing}</Badge>
            </div>
            <Button size="lg" asChild>
              <a href={review.website} target="_blank" rel="noopener noreferrer">
                Try {review.name}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <Card className="border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-green-600">Pros</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {review.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-1" />
                        <span className="text-sm">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-red-600">Cons</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {review.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-600 mt-1" />
                        <span className="text-sm">{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-semibold">Feature</th>
                        <th className="text-center p-4 font-semibold">Included</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {review.features.map((feature, idx) => (
                        <tr key={idx} className="hover:bg-muted/30">
                          <td className="p-4">{feature.name}</td>
                          <td className="p-4 text-center">
                            {feature.included ? (
                              <Check className="h-5 w-5 mx-auto text-green-600" />
                            ) : (
                              <X className="h-5 w-5 mx-auto text-red-600" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8 bg-gradient-to-br from-primary/5 to-blue-500/5">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Ready to Try?</h3>
                  <Button size="lg" asChild>
                    <a href={review.website} target="_blank" rel="noopener noreferrer">
                      Get Started with {review.name}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
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
