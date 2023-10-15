import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'conversion-tool',
    loadChildren: () => import('src/app/remote-conversion-tool/remote-conversion-tool.module').then((m) => m.RemoteConversionToolModule)
  },
  {
    path:'**',
    redirectTo: 'conversion-tool'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
