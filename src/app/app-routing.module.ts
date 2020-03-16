import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'servers', component: ServersComponent},
  {path: 'tabs', component: TabsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
