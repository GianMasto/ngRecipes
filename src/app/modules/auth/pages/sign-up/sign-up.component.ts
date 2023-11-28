import { Component } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({})

  constructor(private asAuthService: AuthService, private cookie: CookieService, private router: Router) { }

  // REGISTRO DE NUEVO USUARIO

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

  sendSignUp():void{
    const { email, password } = this.formLogin.value;
    this.asAuthService.sendNewCredentials(email,password).subscribe(
      response =>{
        const {idToken}= response
        Swal.fire({
          title: "Registro exitoso!",
          icon: "success",
          customClass: {
            popup: 'sweet-popup'
          }
        })
        console.log(idToken)
        // this.cookie.set('token', idToken, 4, '/')
        this.router.navigate(['/auth/login'])
      }, err => {
        Swal.fire({
          title: "No pudo registrarse / usuario existente",
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
