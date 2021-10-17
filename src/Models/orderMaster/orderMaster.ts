
 export interface IorderDetails{
    orderDetailId: number,
    foodItemId: number,
    quantity: number,
    foodItemPrice: number,
    foodItemName: string     
}
export class orderDetails implements IorderDetails{
  orderDetailId= 0;
  foodItemId=0;
  quantity=0;
  foodItemPrice=0;
  foodItemName="";
}
export interface IOrderMaster{
  orderMasterId:number,
  orderNumber:number,
  customerId:Number,
  pMethod:string ,
  gTotal:number,
  deletedOrderItemIds:string ,
  orderDetails:IorderDetails[]
}

export class OrderMaster implements IOrderMaster{
  orderMasterId=0;
  orderNumber=Math.floor(100000 + Math.random() * 900000);
  customerId =0;
  pMethod="none";
  gTotal=0.0;
  deletedOrderItemIds:string ="";
  orderDetails=[];
}