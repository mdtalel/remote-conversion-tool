import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionToolComponent } from './conversion-tool/conversion-tool.component';

const routes: Routes = [
  {
    path: '',
    component: ConversionToolComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversionToolRoutingModule { }
