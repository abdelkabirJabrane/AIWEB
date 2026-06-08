'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="bg-gradient-to-br from-primary/5 via-cyan-500/5 to-blue-500/5 border-primary/20">
              <CardContent className="pt-8">
                <div className="text-center mb-8">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h1 className="text-4xl font-bold mb-4">Stay Ahead with AI Tools</h1>
                  <p className="text-lg text-muted-foreground">
                    Join thousands getting weekly insights on AI tools and productivity tips.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="inline-flex p-4 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                      <Sparkles className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Welcome!</h2>
                    <p className="text-muted-foreground">Check your inbox for a welcome message.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                    <Button type="submit" size="lg" className="w-full h-12" disabled={isSubmitting}>
                      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">No spam. Unsubscribe anytime.</p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
