import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedHeaderComponent } from './shared-header.component';

const routes: Routes = [{ path: '', component: SharedHeaderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedHeaderRoutingModule { }
