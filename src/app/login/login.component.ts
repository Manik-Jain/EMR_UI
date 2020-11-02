import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : []
})
export class LoginComponent implements OnInit {
  userName : string = '';
  password = '';

  @ViewChild('loginForm') myLoginForm : NgForm;

  constructor(
    private router : Router, 
    private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  shouldEnableLoginButton() {
    return !(this.userName.length >= 5 && this.password.length >= 8);
  }

  userHasLoggedIn() {
    //const user = new User(this.userName);
    //this.store.dispatch(new AppLogin(user));
    // this.loginService.onLogin(this.userName);
    // console.log(this.loginService.getUser());
    // this.router.navigate(['home'], {relativeTo: this.activeRoute});
  }

}