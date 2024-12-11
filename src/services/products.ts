import { BASE_URL } from './contants';
import { Product, ProductCategory } from '../models/Product';
import { ProductState } from '../store/reducers/productReducer';

const IMAGE_URL = [
  '/assets/images/products/assasin.png',
  '/assets/images/products/basketball.png',
  '/assets/images/products/dj.png',
  '/assets/images/products/mafia-england.png',
  '/assets/images/products/neon-guy.png',
];

const LIMIT = 20;

const getCategory = (category?: string) => {
  if (category === 'All' || !category) {
    return '';
  }
  return `&category_like=${category}`;
};

const getTier = (tier?: string) => {
  if (tier === 'All' || !tier) {
    return '';
  }
  return `&tier_like=${tier}`;
};

const getTheme = (theme?: string) => {
  if (theme === 'All' || !theme) {
    return '';
  }
  return `&theme_like=${theme}`;
};

const getPriceSort = (priceSort?: string, createdAt?: string) => {
  return `&_sort=price,createdAt&_order=${priceSort ?? 'asc'},${createdAt ?? 'desc'}`;
};

const getQuickSearchText = (searchText?: string) => {
  if (!searchText) {
    return '';
  }
  return `&q=${searchText}`;
};

const getPriceRange = (priceRange?: number[]) => {
  if (!priceRange?.length) {
    return '';
  }
  let range = '';
  if (priceRange[0]) {
    range += `&price_gte=${priceRange[0]}`;
  }

  if (priceRange[1]) {
    range += `&price_lte=${priceRange[1]}`;
  }

  return range;
};

export const fetchProducts = async (
  startAt: number,
  filter: ProductState['filter'],
): Promise<Product[]> => {
  const response = await fetch(
    `${BASE_URL}products?_start=${startAt}&_limit=${LIMIT}${getCategory(filter.category)}${getTier(
      filter.tier,
    )}${getTheme(filter.theme)}${getPriceSort(filter.price)}${getQuickSearchText(
      filter.searchText,
    )}${getPriceRange(filter.priceRange)}`,
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
  const response = await fetch('/data/category-metadata.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const productCategory: ProductCategory[] = await response.json();
  return productCategory;
};
