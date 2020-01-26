import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { MpkModule } from '../mpk/mpk.module';


@NgModule({
  declarations: [SidePanelComponent],
  imports: [
    CommonModule,
    MpkModule
  ],
  exports: [
    SidePanelComponent
  ]
})
export class NaviModule { }
