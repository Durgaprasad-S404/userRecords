import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() user: User = { firstName: '', lastName: '', id: '' };
  showViewModal: boolean = false;
  showEditModal: boolean = false;
  editUserForm: FormGroup = new FormGroup({});

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const { firstName, lastName, id } = this.user;
    this.editUserForm = new FormGroup({
      firstName: new FormControl(firstName, [Validators.required]),
      lastName: new FormControl(lastName, [Validators.required]),
      id: new FormControl(id, [Validators.required]),
    });
  }

  onEdit() {
    this.userService.editUser(this.editUserForm.value);
  }
}
