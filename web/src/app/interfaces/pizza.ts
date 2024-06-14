export interface Pizza {
  id: string;
  name: string;
  prizeWithSize: { price: string; size: string }[];
  tags?: string[];
  favorite: boolean;
  stars: number;
  imgUrl:string;
}
