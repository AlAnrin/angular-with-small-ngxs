import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found.component";
import {PlantsComponent} from "./plants/plants.component";
import {RootComponent} from "./root/root.component";
import {PaintsComponent} from "./paints/paints.component";
import {JewelryComponent} from "./jewelry/jewelry.component";

const routes: Routes = [
  { path: '', component: RootComponent},
  { path: 'plants', component: PlantsComponent},
  { path: 'paints', component: PaintsComponent},
  { path: 'jewelry', component: JewelryComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
