import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

nombre: string = 'Corali Rodriguez';
intereses: string [] = ['Programación', 'Diseño','Viajes'];
correo: string = 'coralirodriguez@gmail.com';

  constructor() { }

  ngOnInit() {
  }

}
