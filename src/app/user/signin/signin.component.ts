import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private router: Router
    ) { }

  user: User = new User
  confirmPassword: string

  //Manipulador de formularios para validar campos
  userForm: FormGroup = new FormGroup({
    email : new FormControl('user', [Validators.required]),
    password : new FormControl('pass', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
    firstName: new FormControl('firstname', [Validators.required]),
    lastName: new FormControl('lastname', [Validators.required]),
  })

  ngOnInit(){
    window.scroll(0,0)
  }

  confirmPass(event: any){
    this.confirmPassword = event.target.value
  }

  cadastrar(){
    this.user.firstName = "Erick"
    this.user.lastName = "Neves"
    this.user.email = "erickneves_13@hotmail.com"
    this.user.password = "1234"
    if (this.user.password != this.confirmPassword){
      alert("Password don't match!")
    }
    else{
      const userToSave: User = this.user
      console.log(userToSave)
      this.userService.salvar(userToSave).subscribe(
        (resp: User) => {
          this.user = resp
          this.router.navigate(['/home'])
          alert("User signed-in!")
        }
      )
    }
  }

  //POST envia e salva o objeto no BD 
  submit(){
    console.log(this.userForm.value)
    const userToSave: User = {...this.userForm.value}
    this.userService
        .salvar(userToSave)
        .subscribe(savedUser => {
          this.userForm.reset()
        })
  }
}
