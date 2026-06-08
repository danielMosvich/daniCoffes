export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  price_discount: number;
  stock: number;
  category_id: number;
  image_path: string;
  available: number;
}
