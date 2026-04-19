import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Threadline | Modern Printify T-Shirt Store',
  description: 'Modern t-shirt ecommerce storefront powered by Next.js and Printify.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav-content">
            <a href="/" className="brand">
              Threadline
            </a>
            <nav>
              <a href="#featured">Featured</a>
              <a href="#catalog">Catalog</a>
              <a href="#about">About</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-content">
            <p>© {new Date().getFullYear()} Threadline. Crafted with Next.js + Printify.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
