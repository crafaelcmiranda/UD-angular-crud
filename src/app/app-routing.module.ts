import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/view/home/home.component';
import { ProductCreateComponent } from './components/view/product/product-create/product-create.component';
import { ProductComponent } from './components/view/product/product.component';

const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"products",component:ProductComponent},
  {path:"products/create" , component:ProductCreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
