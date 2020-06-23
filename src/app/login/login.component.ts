import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Formgroup for login
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //Prep login form on init
    this.loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  }

  get getLoginForm(){
    return this.loginForm.controls;
  }

  checkAdmin() {
    if(!this.loginForm.invalid){
      //Checks if the admin exists in the db
      this.loginService.checkAdmin(this.loginForm.value).subscribe(response => {
        if(response != null){
          //If the admin exists, store their email locally and redirect to home page
          localStorage.setItem("currentUser", response.email);
          window.location.href = '/home';
        }
        else{
          //Display alert if credentials don't match existing admin
          window.alert("This is not a user");
        }
      }, error => {
        window.alert(error.error.message);
      })
    }
  }

}
