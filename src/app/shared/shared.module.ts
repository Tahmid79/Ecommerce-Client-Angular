import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntDesignModule } from "./ant-design/ant-design.module";
import {SharedComponentsModule} from "./shared-components/shared-components.module";

const exports : any = [AntDesignModule,SharedComponentsModule] ;

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],exports: exports
})
export class SharedModule { }
