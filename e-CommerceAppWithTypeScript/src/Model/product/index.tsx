export interface iProduct{
    documentID:number,
    ProductCategory:string,
    ProductName:string,
    ProductThambnail:string,
    ProductPrice:number
}

export class Product implements iProduct{
    documentID=0
    ProductCategory="";
    ProductName="";
    ProductThambnail="";
    ProductPrice=0;
  }