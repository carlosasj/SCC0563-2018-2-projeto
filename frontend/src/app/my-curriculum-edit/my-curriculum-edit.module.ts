import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCurriculumEditComponent } from './my-curriculum-edit.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
  ],
  declarations: [MyCurriculumEditComponent]
})
export class MyCurriculumEditModule { }
