import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatHeaderModule } from 'src/app/shared/mat-header.module';
import { ShowMenuService } from './services/show-menu.service';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MatHeaderModule
  ],
  exports: [ 
    ToolbarComponent,
    MenuComponent ,
    HeaderComponent
  ],
  providers: [ ShowMenuService ]
})
export class HeaderModule { }
