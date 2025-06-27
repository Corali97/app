import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor(private router: Router, private storage: Storage) {}

  async logout() {
    // Elimina el estado de autenticación
    await this.storage.remove('isLoggedIn');
    // Redirige al login
    this.router.navigate(['/login']);
  }
}
