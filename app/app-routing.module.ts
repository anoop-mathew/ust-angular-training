import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { IndianComponent } from './indian/indian.component';
import { ChineseComponent } from './chinese/chinese.component';
import { AmericanComponent } from './american/american.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path:'', component:LoginComponent },
  {path:'login', component:LoginComponent },
  {path:'logout', component:LoginComponent },
   {path:'signup', component:SignupComponent },
  {path:'home', component:HomeComponent },
  {path:'indian', component:IndianComponent },
  {path:'chinese', component:ChineseComponent },
  {path:'american', component:AmericanComponent },
  {path:'cart', component:CartComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
