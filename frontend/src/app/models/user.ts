import {Role} from "./enums/role";
import {Sex} from "./enums/sex";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  sex: Sex;
  birthday: string;
  role: Role;

  constructor(firstName?: string, lastName?: string, sex?: Sex, birthday?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sex = sex;
    this.birthday = birthday;
  }
}
