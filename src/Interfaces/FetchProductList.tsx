


type IFetchProductList ={
  limit: number;
  products: {
    brand: string;
    category: string;
    description: string;
    id: number;
    images: string[];
    price: number;
    thumbnail: string;
    discountPercentage: number;
    rating: number;
    stock: number;

    title: string;
  }[];
  skip: number;
  total: number;
}
export default IFetchProductList;