export interface Cart {
  user_id: String;
  pizza_id: String;
  pizza_name:String;
  quantity: number;
  sizeAndPrice: { size: String; price: number };
}
