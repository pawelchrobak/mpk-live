import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinePickerComponent } from './line-picker/line-picker.component';



@NgModule({
  declarations: [LinePickerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LinePickerComponent
  ]
})
export class MpkModule { }
