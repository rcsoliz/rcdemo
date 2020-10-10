import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailprodutComponent } from './products/detailprodut/detailprodut.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './products/product-list/product-list.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'products', component:ProductListComponent},
  {path:'product/:id', component:DetailprodutComponent},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
