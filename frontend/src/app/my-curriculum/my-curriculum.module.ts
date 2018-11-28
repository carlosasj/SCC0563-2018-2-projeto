import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCurriculumComponent } from './my-curriculum.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
  ],
  declarations: [MyCurriculumComponent]
})
export class MyCurriculumModule {}
