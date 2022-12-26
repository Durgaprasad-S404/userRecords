import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { CreateFormComponent } from './create-form/create-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDetailRowComponent } from './user-detail-row/user-detail-row.component';

@NgModule({
  declarations: [
    CreateUserComponent,
    HomeComponent,
    CreateFormComponent,
    UserDetailRowComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule {}
