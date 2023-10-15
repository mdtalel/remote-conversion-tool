import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionReportToolComponent } from './conversion-report-tool/conversion-report-tool.component';

const routes: Routes = [
  {
    path: '',
    component: ConversionReportToolComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversionToolRoutingModule { }
