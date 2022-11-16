import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

const modules = [
  HeaderModule,
  FooterModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class LayoutsModule { }
