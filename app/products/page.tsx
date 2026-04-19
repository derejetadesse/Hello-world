import { ProductCard } from '@/components/ProductCard';
import { getProducts } from '@/lib/printify';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="container products-page">
      <div className="section-heading">
        <h1>All Products</h1>
        <p>Explore our complete t-shirt catalog.</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
