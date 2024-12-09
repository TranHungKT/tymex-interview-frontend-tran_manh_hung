import { BASE_URL } from './contants';
import { Product, ProductCategory } from '../models/Product';

const IMAGE_URL = [
  '/assets/images/products/assasin.png',
  '/assets/images/products/basketball.png',
  '/assets/images/products/dj.png',
  '/assets/images/products/mafia-england.png',
  '/assets/images/products/neon-guy.png',
];

const LIMIT = 20;
function timeout(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getCategory = (category?: string) => {
  if (!category) {
    return undefined;
  }
  return `category_like=${category}`;
};

export const fetchProducts = async (startAt: number, category?: string): Promise<Product[]> => {
  await timeout(2000);
  const response = await fetch(
    `${BASE_URL}products?_start=${startAt}&_limit=${LIMIT}&${getCategory(category)}`,
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const products: Product[] = await response.json();
  return products.map((product) => ({
    ...product,
    imageUrl: IMAGE_URL[Math.floor(Math.random() * IMAGE_URL.length)],
  }));
};

export const fetchProductCategories = async (): Promise<ProductCategory[]> => {
  await timeout(2000);
  const response = await fetch('/data/category-metadata.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const productCategory: ProductCategory[] = await response.json();
  return productCategory;
};
