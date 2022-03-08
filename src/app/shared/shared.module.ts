import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntDesignModule } from "./ant-design/ant-design.module";
import { SharedComponentsModule } from "./shared-components/shared-components.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";

const exports : any = [AntDesignModule,SharedComponentsModule,FlexLayoutModule] ;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],exports: exports
})
export class SharedModule { }
