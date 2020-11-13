import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User[] = [new User("Tatyana", "Zayats", "female", "15.10.2000"),
    new User("Tatyana", "Zayats", "female", "15.10.2000"),
    new User("Tatyana", "Zayats", "female", "15.10.2000"),
    new User("Tatyana", "Zayats", "female", "15.10.2000"),
    new User("Tatyana", "Zayats", "female", "15.10.2000"),
    new User("Tatyana", "Zayats", "female", "15.10.2000"),
    new User("Tatyana", "Zayats", "female", "15.10.2000"),
    new User("Tatyana", "Zayats", "female", "15.10.2000"),
    new User("Tatyana", "Zayats", "female", "15.10.2000")];
  displayedColumns: string[] = ['first name', 'last name', 'sex', 'date of birth'];

  ngOnInit(): void {

  }

}
