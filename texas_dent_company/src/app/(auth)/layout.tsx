import { Header, Footer } from '@/components/layout';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center py-16 bg-gradient-to-br from-secondary to-background">
        {children}
      </main>
      <Footer />
    </>
  );
}
