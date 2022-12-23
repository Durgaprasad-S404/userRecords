import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  users: User[] = [];
  private destroy$ = new Subject();

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.usersObservable
      .pipe(takeUntil(this.destroy$))
      .subscribe((users) => (this.users = users));
  }

  ngOnDestroy() {
    this.destroy$.complete();
  }
}
