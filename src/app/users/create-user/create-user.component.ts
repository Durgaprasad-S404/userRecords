import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  showModal: boolean = false;
  user: User;

  constructor(private userService:UserService) {
    this.user = {
      firstName: '',
      lastName: '',
      id: '',
    };
  }

  onSubmit(user: User) {
    this.userService.createUser(user);
  }

  onCancel() {
    this.showModal = false;
  }
}
