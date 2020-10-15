import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WallAddComponent } from './wall-add/wall-add.component';
import { WallListComponent } from './walls/wall-list/wall-list.component';
import { WallDetailedComponent } from './walls/wall-detailed/wall-detailed.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'walls', component: WallListComponent},
  {path: 'add', component: WallAddComponent},
  {path: 'update', component: WallDetailedComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
