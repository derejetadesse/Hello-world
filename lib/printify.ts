import { mockProducts } from './mock-products';
import { Product } from './types';

const PRINTIFY_BASE_URL = 'https://api.printify.com/v1';

export async function getProducts(): Promise<Product[]> {
  const token = process.env.PRINTIFY_API_TOKEN;
  const shopId = process.env.PRINTIFY_SHOP_ID;

  if (!token || !shopId) {
    return mockProducts;
  }

  try {
    const response = await fetch(`${PRINTIFY_BASE_URL}/shops/${shopId}/products.json`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      next: { revalidate: 300 }
    });

    if (!response.ok) {
      return mockProducts;
    }

    const data = await response.json();

    const normalized: Product[] = (data.data ?? []).map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description || 'Premium t-shirt crafted for comfort and daily wear.',
      image: item.images?.[0]?.src || mockProducts[0].image,
      price: item.variants?.[0]?.price ? item.variants[0].price / 100 : 25,
      tags: ['Printify', 'Made to order', 'Fast shipping']
    }));

    return normalized.length ? normalized : mockProducts;
  } catch {
    return mockProducts;
  }
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.id === id);
}
