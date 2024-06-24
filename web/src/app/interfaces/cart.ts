export interface Cart {
  _id:string;
  user_id: string;
  pizza_id: string;
  pizza_name: string;
  quantity: number;
  sizeAndPrice: { size: string; price: number };
  allSizeAndPrice: { size: string; price: number }[];
  smallPrice?: number;
  mediumPrice?: number;
  largePrice?: number;
  cartAmount?:number;
}
