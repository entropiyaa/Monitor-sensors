import {User} from "./user";

export class Examination {
  id: number;
  type: string;
  status: string;
  date: string;
  user: User;

  constructor(type: string, user: User) {
    this.type = type;
    this.user = user;
  }
}
