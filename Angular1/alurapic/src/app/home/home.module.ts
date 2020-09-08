import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignInComponent } from './signin/signin.component';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [SignInComponent, SignUpComponent, HomeComponent]
})
export class HomeModule { }
