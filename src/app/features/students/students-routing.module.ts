import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { FormStudentComponent } from './components/form-student/form-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';

const routes: Routes = [
  { path: "", component: ListStudentComponent },
  { path: ":method", component: FormStudentComponent, canActivate: [ AdminGuard ] },
  { path: ":method/:id", component: FormStudentComponent, canActivate: [ AdminGuard ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
