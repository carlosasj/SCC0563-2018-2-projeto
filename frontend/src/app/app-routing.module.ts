import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { MyCurriculumComponent } from './my-curriculum/my-curriculum.component';
import { MyCurriculumEditComponent } from './my-curriculum-edit/my-curriculum-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'my-curriculum',
    component: MyCurriculumComponent,
  },
  {
    path: 'edit/my-curriculum',
    component: MyCurriculumEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
