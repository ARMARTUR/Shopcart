export interface Product {
  brand: string;
  category: string;
  description: string;
  id: number;
  images: string[];
  price: number;
  thumbnail: string;
  rating: number;
  stock: number;
  title: string;
  discountPercentage:number
}
export interface FetchResult {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};
