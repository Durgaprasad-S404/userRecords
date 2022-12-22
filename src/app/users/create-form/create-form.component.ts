import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});

  @Input() user: User = {
    firstName: '',
    lastName: '',
    id: '',
  };

  @Output() userCreate = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    const { firstName, lastName, id } = this.user;
    this.userForm = new FormGroup({
      firstName: new FormControl(firstName, [Validators.required]),
      lastName: new FormControl(lastName, [Validators.required]),
      id: new FormControl(id, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    this.userCreate.emit(this.userForm.value);
  }

  onCancel(){
    this.cancel.emit();
  }
}
