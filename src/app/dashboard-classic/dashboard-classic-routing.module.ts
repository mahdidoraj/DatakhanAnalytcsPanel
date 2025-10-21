import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardClassicComponent } from './dashboard-classic.component';

const routes: Routes = [{ path: '', component: DashboardClassicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardClassicRoutingModule { }
