import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlPipe } from '../pipes/form-control.pipe';

@NgModule({
  declarations: [ModalComponent, InputComponent, FormControlPipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, ModalComponent, FormControlPipe],
})
export class SharedModule {}
