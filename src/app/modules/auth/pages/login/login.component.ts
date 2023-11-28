import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({})

  constructor(private asAuthService: AuthService, private cookie: CookieService, private router: Router) { }

  // LOGIN DE USUARIO REGISTRADO

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }
  sendLogin():void {
    const { email, password } = this.formLogin.value;
    this.asAuthService.sendCredentials(email, password).subscribe(
      response =>{
        Swal.fire({
          title: "Ingreso exitoso!",
          icon: "success",
          customClass: {
            popup: 'sweet-popup'
          }
        })
        const {idToken}= response
        console.log(idToken)
        this.cookie.set('token', idToken, 4, '/')
        this.router.navigate(['/'])
      }, err => {
        Swal.fire({
          title: "Credenciales no registradas",
          icon: "error",
          customClass: {
            popup: 'sweet-popup'
          }
        })
        this.errorSession = true
        console.log('error 👉', err)
      }
    )

  }
}
