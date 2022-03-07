import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

const exports: any = [NzMenuModule,NzIconModule,NzCardModule,NzGridModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: exports
})
export class AntDesignModule { }
