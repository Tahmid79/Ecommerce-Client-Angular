import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntDesignModule } from "./ant-design/ant-design.module";


const exports : any = [AntDesignModule] ;

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],exports: exports
})
export class SharedModule { }
