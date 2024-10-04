import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  submitted:boolean=false;


  constructor(private formBuilder:FormBuilder,private router:Router){}

  ngOnInit():void{
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['',Validators.required],
      password: ['',[Validators.required,Validators.minLength(8)]],
      confirmPassword: ['',Validators.required]
    },
    {
      validator: this.passwordMatchValidator
    });
  }

  get registerControls(){
    return this.registerForm.controls
  }


  handleRegister(){
    this.submitted=!this.submitted;
    if(this.registerForm.valid){
      console.log("resgistration done successfully")
      this.router.navigate(['/login'])
    }
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }


}