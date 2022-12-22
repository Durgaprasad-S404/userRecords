import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail-row',
  templateUrl: './user-detail-row.component.html',
  styleUrls: ['./user-detail-row.component.css'],
})
export class UserDetailRowComponent {
  @Input() user: User = { firstName: '', lastName: '', id: '' };
  @Input() index: number = 1;
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
