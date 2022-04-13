import { Requestline } from "../requestline/requestline.class";
import { User } from "../user/user.class";

// Properties
export class Request {
    id: number = 0;
    description: string = "";
    justification: string = "";
    rejectionReason: string = "";
    deliveryMode: string = "PICKUP";
    status: string = "NEW";
    total: number = 0;
    requestlines!: Requestline[];
    
    // Has a Foreign Key to User
    userId: number = 0;
    user!: User;
   }