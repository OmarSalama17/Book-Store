export type Cart = {
  id: string | number;
  title: string;
  price: string | number;
  image: string;
  quantity?: number;
  authors?: string[]; 
}