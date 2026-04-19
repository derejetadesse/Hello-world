import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Image src={product.image} alt={product.title} fill className="product-image" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="product-content">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="product-meta">
          <span className="price">${product.price}</span>
          <Link href={`/products/${product.id}`}>View Product</Link>
        </div>
      </div>
    </article>
  );
}
