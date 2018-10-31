import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { MyCurriculumComponent } from './my-curriculum/my-curriculum.component';
import { MyCurriculumEditComponent } from './my-curriculum-edit/my-curriculum-edit.component';
import { CurriculumResolver } from './resolvers/curriculum.resolver';

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
    canActivate: [AuthGuard],
    resolve: {
      curriculum: CurriculumResolver,
    }
  },
  {
    path: 'edit/my-curriculum',
    component: MyCurriculumEditComponent,
    canActivate: [AuthGuard],
    resolve: {
      curriculum: CurriculumResolver,
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
