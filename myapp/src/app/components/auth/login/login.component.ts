import { Component, Injectable, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    @Inject(FormBuilder) private fb: FormBuilder,
    @Inject(AuthService) private authService: AuthService,
    @Inject(Router) private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Login failed:', error);
        }
      });
    }
  }
} 