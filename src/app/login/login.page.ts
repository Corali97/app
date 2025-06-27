import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storage: Storage
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async ngOnInit() {
    await this.storage.create();
  }

  async login() {
    if (this.loginForm.valid) {
      // Aquí puedes colocar validación real contra una API si deseas
      await this.storage.set('isLoggedIn', true); // Guardar sesión
      this.router.navigate(['/movimiento']); // Redirigir tras login
    } else {
      alert('Por favor completa los campos correctamente.');
    }
  }
}
