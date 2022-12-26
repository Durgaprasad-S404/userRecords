import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlPipe } from '../pipes/form-control.pipe';

@NgModule({
  declarations: [InputComponent, FormControlPipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, FormControlPipe],
})
export class SharedModule {}
