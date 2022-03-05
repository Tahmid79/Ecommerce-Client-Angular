import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";

const exports: any = [NzMenuModule,NzIconModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: exports
})
export class AntDesignModule { }
