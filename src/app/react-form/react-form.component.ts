import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl}from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {
msg:string|undefined
  constructor() { }

  ngOnInit(): void {  }
  a1:string |undefined;
  a2:string | undefined;
  a3:string | undefined;
  a4:string | undefined;
  a5:string | undefined;
  a6:string | undefined;
    profileForm=new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',[Validators.minLength(1)]),
      email:new FormControl('',[Validators.email,Validators.required]),
      city:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      l1:new FormControl('',Validators.required),
      l2:new FormControl ('',Validators.required),
      
    });
    onSubmit()
    {
      this.a1=this.profileForm.value.firstname;
      this.a2=this.profileForm.value.lastname;
      this.a3=this.profileForm.value.email;
      this.a4=this.profileForm.value.city;
      this.a5=this.profileForm.value.gender;
      if(this.profileForm.value.l1 && this.profileForm.value.l2)
      {
        this.a6="ENGLISH AND TAMIL";

      }
      else if(this.profileForm.value.l1)
      {
        this.a6="ENGLISH";

      }
      else if(this.profileForm.value.l2)
      {
        this.a6="TAMIL";
      }
      else{
        this.a6="NONE";
      }
    }
  }



