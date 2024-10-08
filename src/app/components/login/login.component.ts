import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user-service/user.service';
// import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  submitted:boolean=false;

  constructor(private userService: UserService, private router: Router, private formBuilder:FormBuilder,private snackBar: MatSnackBar){}

  ngOnInit():void{
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]]
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
              localStorage.setItem('name', res.data.fstname);
            localStorage.setItem('email', res.data.eml);
            // console.log("login name",name);
            // console.log("login email",email)
            // this.router.navigate(['/notes']);
            console.log("data",res.data)
              console.log('Token stored in localStorage:', token);
              this.snackBar.open('Login successfully!', 'Close', { // Show success message
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
              });

              this.router.navigate(['/notes']);
            } else {
              console.error('No token found in response:', res);
            }
          } else {
            console.error('Login failed:', res.message || 'Unknown error'); 
          }
        },
        error: (err) => {
          console.error('Login error:', err); 
        },
      });
    }
    
  }
}
