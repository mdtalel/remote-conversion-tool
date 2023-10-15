import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversionToolRoutingModule } from './conversion-tool-routing.module';
import { ConversionToolComponent } from './conversion-tool/conversion-tool.component';


@NgModule({
  declarations: [
    ConversionToolComponent
  ],
  imports: [
    CommonModule,
    ConversionToolRoutingModule
  ]
})
export class RemoteConversionToolModule { }
