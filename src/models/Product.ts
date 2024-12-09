export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  isFavorite: boolean;
  createdAt: string;
  theme: string;
  tier: string;
  imageId: number;
  imageUrl: string;
  authorId: number;
}

export interface ProductCategory {
  id: number;
  category: string;
}
