import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SSORegisterComponent } from './ssoregister.component';

const routes: Routes = [{ path: '', component: SSORegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SSORegisterRoutingModule { }
