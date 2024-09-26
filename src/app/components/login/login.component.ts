import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string = "rahulsharma321@gmail.com";
  password:string = "rahulsharma";

  constructor(private userService: UserService, private router: Router){}

  ngOnInit():void{

  }

  handleLogin() {
    console.log(this.email);
    console.log(this.password);
    this.userService
      .loginSignUpApiCall('users/login', {
        email: this.email,
        password: this.password,
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
