import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {Subscription} from "rxjs";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  public users: User[] = [];
  displayedColumns: string[] = ['first name', 'last name', 'sex', 'date of birth'];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.subscriptions.push(this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }

}
