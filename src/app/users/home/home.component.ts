import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  users: User[] = [];
  usersSubscription: Subscription = new Subscription();

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.usersSubscription = this.userService.usersObservable.subscribe(
      (users) => (this.users = users)
    );
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }
}
