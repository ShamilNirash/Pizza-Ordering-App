export interface Order {
    _id:number;
    name:string;
    contactNo:string;
    cartItems:{name:string,productSizeAndPrice:{size:string,price:number},quantity:number}[];
    totalAmount:number;
    address:string,
    notes?:string;
    isPayed:boolean;
    paymentId:string;
    createTime:string
}
