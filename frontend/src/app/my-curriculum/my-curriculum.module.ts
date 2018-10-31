import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCurriculumComponent } from './my-curriculum.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [MyCurriculumComponent]
})
export class MyCurriculumModule { }
