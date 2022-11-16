import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsModule } from './layouts/layouts.module';
import { CoreModule } from './core/core.module';
import { StudentsModule } from './features/students/students.module';
import { AuthModule } from './features/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentsService } from './core/services/db/students.service';
import { SessionService } from './core/services/auth/session.service';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    CoreModule,
    StudentsModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [ StudentsService, SessionService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
