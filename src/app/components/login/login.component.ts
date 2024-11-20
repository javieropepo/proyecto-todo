import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword = false;

  credenciales = {
    email: '',
    password: ''
  };

  error = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  login() {
    this.error = '';
    this.loginService.login(this.credenciales).subscribe({
      next: (response) => {
        const token = response.headers.get('Authorization');
        if (token) {
          this.loginService.saveToken(token.replace('Bearer ', ''));
          console.log('Login exitoso - Token recibido');
        }
      },
      error: (err) => {
        this.error = 'Credenciales inválidas';
        console.error('Error en login:', err);
      }
    });
  }

  /** Navegar a la página de register */
  register() {
    this.router.navigate(['register']);
  }

  /**ojito para visibilidad de contraseña */
  ojito() {
    this.showPassword = !this.showPassword;
  }
}