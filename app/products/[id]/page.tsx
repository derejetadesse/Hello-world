import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/printify';

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container product-detail-page">
      <Link href="/products" className="back-link">
        ← Back to products
      </Link>
      <div className="product-detail-layout">
        <div className="product-detail-image-wrap">
          <Image src={product.image} alt={product.title} fill className="product-image" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="product-detail-content">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p className="detail-price">${product.price}</p>
          <div className="tag-list">
            {product.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <button className="button-primary">Add to Cart</button>
        </div>
      </div>
    </main>
  );
}
