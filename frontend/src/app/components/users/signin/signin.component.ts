import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AlertsService } from 'src/app/service/alerts.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../../../css/app.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private router: Router,
    private alerts: AlertsService
    ) { }

  user: User = new User
  confirmPassword: string="";
  isConfirmedPass: boolean = false;
  isEmailValid: boolean = false;
  disableButton: string = "disabled"
  emailMessage: string = "Entre com um email válido"
  colorEmail: string = "cl-dark-pink"

  //Manipulador de formularios para validar campos
  userForm: FormGroup = new FormGroup({
    email : new FormControl('', [Validators.required]),
    profileImgUrl : new FormControl(''),
    password : new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  })

  ngOnInit(){
    window.scroll(0,0)
  }

  confirmPass(event: any){
    this.confirmPassword = event.target.value
  }

  readyToSave(){
    if (this.isConfirmedPass && this.isEmailValid){
      return true;
    } else {
      return false;
    }
  }

  saveUser(userToSave: User){
    if (userToSave.profileImgUrl == ""){
      userToSave.profileImgUrl="https://i.imgur.com/LGGL7VJ.png";
    }
    this.userService
      .salvar(userToSave)
      .subscribe(savedUser => {
        console.log(userToSave)
        this.userForm.reset()
        this.router.navigate(['/users/login'])
        this.alerts.showAlertSuccess("Usuário criado com sucesso!")
      })
  }

  checkPassword(){
    const password = this.user.password;
    const confirmPassword = this.confirmPassword;
    if (password == confirmPassword){
      this.isConfirmedPass = true;
    } else {
      this.isConfirmedPass = false;
    }
  }

  checkEmail(){
    const email: string = this.user.email;
    const expression: RegExp = /\S+@\S+\.\S+/;
    this.isEmailValid = expression.test(email);
    if(this.isEmailValid){
      this.userService.
      noAuthGetUserByUsername(email)
      .subscribe(
        (resp) => {
          this.colorEmail = "cl-dark-pink";
          this.emailMessage="Email já utilizado";
          this.isEmailValid=false;
        },
        error => {
          switch(error.status){
            case 500: {
              this.colorEmail = "cl-green"
              this.emailMessage="Email válido"
              break;
            }
          }
        }
      )
    } else {
      this.colorEmail = "cl-dark-pink"
      this.emailMessage="Entre com um email válido"
    }
  }

  validateFields(){
    const password: string = this.user.password;
    const confirmPassword: string = this.confirmPassword;
    
    if (this.isEmailValid == false){
      this.alerts.showAlertDanger("Insira um email válido!");
      console.log(this.userForm.value.email);
    } else if (password == ""){
      this.alerts.showAlertDanger("Senha em branco!");
    } else if (password != confirmPassword){
      this.alerts.showAlertDanger("Senhas não conferem!")
    } else if (password == confirmPassword){
      this.isConfirmedPass = true;
    } else if (this.readyToSave()){
      this.saveUser(this.user);
    }
  }
}
