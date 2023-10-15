import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ConversionToolRoutingModule } from './conversion-tool-routing.module';

import { ConversionReportToolComponent } from './conversion-report-tool/conversion-report-tool.component';
import { FlexmonsterPivotModule } from 'ngx-flexmonster';


@NgModule({
  declarations: [
    ConversionReportToolComponent
  ],
  imports: [
    CommonModule,
    ConversionToolRoutingModule,
    FlexmonsterPivotModule,
    MatIconModule
  ]
})

export class RemoteConversionToolModule { }
