import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirComponent } from './dir/dir.component';
import { HomeComponent } from './home/home.component';
import { PipeComponent } from './pipe/pipe.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'databinding',component:DatabindingComponent},
  {path:'directive',component:DirComponent},
  {path:'pipe',component:PipeComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'product/:id/:prodName',component:ProductComponent},
  {path:'product',component:ProductComponent},
  {path:'products',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
