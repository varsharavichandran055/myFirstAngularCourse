import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { ChildComponent } from './child/child.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirComponent } from './dir/dir.component';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { MembershipComponent } from './membership/membership.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PipeComponent } from './pipe/pipe.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormValidationComponent } from './template-form-validation/template-form-validation.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'databinding',component:DatabindingComponent},
  {path:'directive',component:DirComponent},
  {path:'pipe',component:PipeComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'product/:id/:prodName',component:ProductComponent},
  {path:'product',component:ProductComponent},
  {path:'products',component:ProductsComponent},
  {path:'eager',component:HomeComponent},
  {path:'inheritance',component:ChildComponent},
  {path:'nested',component:MasterComponent},
  {path:'templateForm',component:TemplateFormComponent},
  {path:'reactiveForm',component:ReactiveFormComponent},
  {path:'templateFormValidation',component:TemplateFormValidationComponent},
  {path:'reactiveFormValidation',component:ReactiveFormValidationComponent},
  {path:'lazy',loadChildren:()=>import ('./user/user.module').then(x=>x.UserModule)},


  {path:'account',component:AccountComponent,children:[
    {path:'',component:ProfileComponent},
    {path:'membership',component:MembershipComponent},
  ]
},
{path:'notfound',component:NotfoundComponent},
  {path:'**',redirectTo:'notfound'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
