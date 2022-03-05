import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AntDesignModule } from "../ant-design/ant-design.module";

const exports: any = [NavbarComponent] ;

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AntDesignModule
  ],
  exports: exports
})
export class SharedComponentsModule { }
