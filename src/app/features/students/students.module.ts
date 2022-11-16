import { NgModule } from '@angular/core';

import { StudentsRoutingModule } from './students-routing.module';
import { FormStudentComponent } from './components/form-student/form-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { RenderFormPipe } from './pipes/render-form.pipe';
import { MatGenericModule } from 'src/app/shared/mat-generic.module';
import { MatFormsModule } from 'src/app/shared/mat-forms.module';
import { MatTablesModule } from 'src/app/shared/mat-tables.module';
import { RenderFormService } from './services/render-form.service';
import { StudentFormatService } from './services/student-format.service';

const components = [
  FormStudentComponent,
  ListStudentComponent,
]

@NgModule({
  declarations: [
    FullNamePipe,
    RenderFormPipe,
    ...components
  ],
  imports: [
    MatGenericModule,
    MatFormsModule,
    StudentsRoutingModule,
    MatTablesModule,
  ],
  exports: components,
  providers: [ RenderFormService, StudentFormatService ]
})
export class StudentsModule { }
