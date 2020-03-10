import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { ServersComponent } from './servers/servers.component';

const routes: Routes = [
  {path: 'charts', component: ChartsComponent},
  {path: 'servers', component: ServersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
