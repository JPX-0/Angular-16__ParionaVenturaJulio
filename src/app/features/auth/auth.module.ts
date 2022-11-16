import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './component/auth.component';
import { MatGenericModule } from 'src/app/shared/mat-generic.module';
import { MatFormsModule } from 'src/app/shared/mat-forms.module';
import { FormGroupDirective } from '@angular/forms';


@NgModule({
  exports: [ AuthComponent ],
  imports: [
    MatGenericModule,
    AuthRoutingModule,
    MatFormsModule,
  ],
  declarations: [ AuthComponent ],
  providers: [ FormGroupDirective ]
})
export class AuthModule { }
