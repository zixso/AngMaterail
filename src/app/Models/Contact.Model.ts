
export  class User{

    name:string;
    avatar?:string;
    bio?:string;
    notes?:Note[];


  constructor() {}
}
export class Note
{
  title:string;
  date:Date;
  constructor() {}

}
