import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirComponent } from './dir/dir.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'databinding',component:DatabindingComponent},
  {path:'directive',component:DirComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
