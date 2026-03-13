import { Header, Footer } from '@/components/layout';
import { AnimationProvider } from '@/components/animations/AnimationProvider';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <AnimationProvider>
        <main className="flex-1">{children}</main>
      </AnimationProvider>
      <Footer />
    </>
  );
}
