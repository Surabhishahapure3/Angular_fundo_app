import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user-service/user.service';
// import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  submitted:boolean=false;

  constructor(private userService: UserService, private router: Router, private formBuilder:FormBuilder){}

  ngOnInit():void{
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }

  get loginControls(){
    return this.loginForm.controls
  }

  handleLogin() {
    this.submitted = !this.submitted;
    const {email,password} = this.loginForm.value
    if(this.loginForm.valid){
      this.userService
      .loginSignUpApiCall('users/login', {
        email: email,
        password: password,
      })
      .subscribe({
        next: (res:any) => {
          console.log('login response',res);
          if (res.code === 200 && res.data) { // Ensure the response structure is correct
            const token = res.data.token;
            if (token) {
              localStorage.setItem("accessToken", token);
              console.log('Token stored in localStorage:', token);
              this.router.navigate(['/notes']);
            } else {
              console.error('No token found in response:', res);
            }
          } else {
            console.error('Login failed:', res.message || 'Unknown error'); // Handle unsuccessful login
          }
        },
        error: (err) => {
          console.error('Login error:', err); // Handle errors
        },
      });
    }
    
  }
}
