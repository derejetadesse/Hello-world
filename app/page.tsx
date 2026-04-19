import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { getProducts } from '@/lib/printify';

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main>
      <section className="hero" id="featured">
        <div className="container hero-content">
          <p className="eyebrow">Modern essentials</p>
          <h1>Premium t-shirts made to order with Printify</h1>
          <p>
            Launch and scale your apparel brand with a clean storefront powered by Next.js, fast shipping workflows,
            and high-quality print-on-demand fulfillment.
          </p>
          <div className="hero-actions">
            <Link href="#catalog" className="button-primary">
              Shop Collection
            </Link>
            <Link href="/products" className="button-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="catalog container" id="catalog">
        <div className="section-heading">
          <h2>Featured T-Shirts</h2>
          <p>Clean cuts, elevated fabric, and dependable Printify production.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="about container" id="about">
        <h2>Why Threadline?</h2>
        <ul>
          <li>Modern UI optimized for mobile and desktop shopping.</li>
          <li>Printify integration with fallback local catalog for reliability.</li>
          <li>Fast paths from product discovery to checkout intent.</li>
        </ul>
      </section>
    </main>
  );
}
