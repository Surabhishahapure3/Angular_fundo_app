import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  submitted:boolean=false;
  // signUpForm!: FormGroup;
  register: boolean = false;


  constructor(private formBuilder:FormBuilder,private router:Router,private userService: UserService ){}

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


  handleRegister() {
    this.register = true;
    if (this.registerForm.invalid) {
      return;
    }

    console.log(this.registerForm.value);
    const { firstName, lastName, userName, password } = this.registerForm.value;

    this.userService.loginSignUpApiCall('users/register', {
      firstName,
      lastName,
      email:userName,
      password
    }).subscribe({
      next: (res: any) => {
        console.log('API response:', res);
        this.router.navigate(['/login']);
        // this.snackbarService.showMessage('User signed up successfully!');
      },
      error: (err) => {
        console.log('API error:', err);
      }
    });
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }


}