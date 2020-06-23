import { Component, OnInit } from '@angular/core';
import { AdminmanagementService } from './adminmanagement.service';
import { Admin } from './admin';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-adminmanagement',
  templateUrl: './adminmanagement.component.html',
  styleUrls: ['./adminmanagement.component.css']
})

export class AdminmanagementComponent implements OnInit {
  //List of admins
  admins: Admin[] = [];
  //Formgroup for new admin
  adminForm: FormGroup;

  constructor(private adminmanagementService: AdminmanagementService, private formBuilder: FormBuilder) { }

  //Oninit- Get list of existing admins and prep adminform for input
  ngOnInit(): void {
    this.adminmanagementService.getAdmins().subscribe(admins => this.admins = admins);
    this.adminForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  //Returns controls for new admin form
  get getAdminForm(){
    return this.adminForm.controls;
  }

  //Post the new admin's information to the back end
  addAdmin() {
    if(!this.adminForm.invalid){
      this.adminmanagementService.postAdmin(this.adminForm.value).subscribe(response => {
        //reload page on success
        window.location.reload();
      }, error => {
        window.alert(error.error.message);
      })
    }
  }

}
