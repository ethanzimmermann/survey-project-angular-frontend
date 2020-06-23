import { Component, OnInit } from '@angular/core';
import { UserlistService } from './userlist.service';
import { User } from './user';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  //List of existing users
  users: User[] = [];
  //Form for user field entry
  userForm: FormGroup;
  //Holder for new users
  newUser: User;

  constructor(private userlistService: UserlistService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //Get the list of existing users from the backend
    this.userlistService.getUsers().subscribe(users => this.users = users);
    //Prep formgroup for new user entry fields
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAdress: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      id: [-1],
      admin: [localStorage.getItem("currentUser")]
    })
    //Set new user to an empty user object
    this.newUser = {id: -1, admin: localStorage.getItem("currentUser"), firstName: "", lastName: "", emailAddress: "", phoneNumber: ""}
  }

  get getUserForm(){
    return this.userForm.controls;
  }

  //Posts the new user object to the backend
  addUser() {
    this.userlistService.postUser(this.newUser).subscribe(response => {
      //Reload page on success
      window.location.reload();
    }, error => {
      window.alert(error.error.message);
    })
  }

  //Saves an existing user, posting them to the backend
  saveUser(user: User) {
    this.userlistService.postUser(user).subscribe(response => {
      //Reload page on success
      window.location.reload();
    }, error => {
      window.alert(error.error.message);
    })
  }

}
