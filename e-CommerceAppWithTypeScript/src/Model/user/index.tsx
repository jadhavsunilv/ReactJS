export interface iUser{
    displayName:string,
    email:string,
    password:string,
    confirmPassword:string
}
export class User implements iUser{
    displayName="";
    email="";
    password="";
    confirmPassword="";
  }