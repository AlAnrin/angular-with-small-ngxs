import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found.component";
import {AppComponent} from "./app.component";
import {PlantsComponent} from "./plants/plants.component";
import {RootComponent} from "./root/root.component";

const routes: Routes = [
  { path: '', component: RootComponent},
  { path: 'plants', component: PlantsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
