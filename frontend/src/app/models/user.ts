export class User {
  id: number;
  firstName: string;
  lastName: string;
  sex: string;
  birthday: string;

  constructor(firstName?: string, lastName?: string, sex?: string, birthday?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sex = sex;
    this.birthday = birthday;
  }
}
