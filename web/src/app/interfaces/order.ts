export interface Order {
    id:number;
    name:string;
    contactNo:string;
    productItem:{name:string,productSizeAndPrice:{size:string,price:number},quantity:number}[];
    totalAmount:number;
    address:string,
    notes?:string;
    isPayed:boolean;
}
