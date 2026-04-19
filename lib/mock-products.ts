import { Product } from './types';

export const mockProducts: Product[] = [
  {
    id: 'classic-oversized-tee',
    title: 'Classic Oversized Tee',
    description:
      'A heavyweight premium cotton t-shirt with oversized fit, perfect for minimalist streetwear looks.',
    image:
      'https://images.printify.com/mockup/664f7da7d5b6131f9f0fe751/87088/90074/classic-oversized-tee.jpg',
    price: 34,
    tags: ['Oversized', 'Premium Cotton', 'Streetwear']
  },
  {
    id: 'washed-vintage-tee',
    title: 'Washed Vintage Tee',
    description:
      'Soft-wash tee inspired by retro silhouettes. Breathable everyday comfort with elevated style.',
    image:
      'https://images.printify.com/mockup/664f7da7d5b6131f9f0fe751/87088/90074/washed-vintage-tee.jpg',
    price: 29,
    tags: ['Vintage', 'Soft Wash', 'Everyday']
  },
  {
    id: 'graphic-drop-shoulder',
    title: 'Graphic Drop Shoulder',
    description:
      'Drop-shoulder profile with durable print-ready surface for statement graphics and bold branding.',
    image:
      'https://images.printify.com/mockup/664f7da7d5b6131f9f0fe751/87088/90074/graphic-drop-shoulder.jpg',
    price: 39,
    tags: ['Drop Shoulder', 'Print Ready', 'Bold']
  }
];
