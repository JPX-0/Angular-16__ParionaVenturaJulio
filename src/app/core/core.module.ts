import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ResolveUserPipe } from './pipes/resolve-user.pipe';

const components = [
  HomeComponent,
  NotFoundComponent,
  ResolveUserPipe
]

@NgModule({
  declarations: components,
  imports: [ CommonModule ],
  exports: components,
})
export class CoreModule { }
