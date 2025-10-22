import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellHeaderComponent } from './shell-header.component';

const routes: Routes = [{ path: '', component: ShellHeaderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellHeaderRoutingModule { }
