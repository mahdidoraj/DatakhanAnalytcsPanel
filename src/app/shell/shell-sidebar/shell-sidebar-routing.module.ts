import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellSidebarComponent } from './shell-sidebar.component';

const routes: Routes = [{ path: '', component: ShellSidebarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellSidebarRoutingModule { }
