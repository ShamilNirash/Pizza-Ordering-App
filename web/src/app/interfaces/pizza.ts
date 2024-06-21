export interface Pizza {
  _id: string;
  name: string;
  prizeWithSize: { price: number; size: string }[];
  tags?: string[];
  favorite: boolean;
  stars: number;
  imgUrl:string;
}
