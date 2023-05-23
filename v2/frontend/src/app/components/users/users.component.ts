import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from '../../model/User'
import { UsersService } from '../../service/users.service';
@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['../../css/app.component.scss']
})
export class UsersComponent implements OnInit{
  users: User[] = [];
  profileImg: string="";
  name: string="";
  username: string="";
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.listUsers()
  }
  //Manipulador de formularios para validar campos
  userForm: FormGroup = new FormGroup({
    username : new FormControl('user', [Validators.required]),
    password : new FormControl('pass', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
  })

  //GET traz todos os registros
  listUsers(){
    this.userService.listar().subscribe(
      userList => {
        console.log(userList)
        this.users = userList
      })
  }

  //POST envia e salva o objeto no BD 
  submit(){
    console.log(this.userForm.value)
    const userToSave: User = {...this.userForm.value}
    this.userService
        .salvar(userToSave)
        .subscribe(savedUser => {
          this.users.push(userToSave)
          this.userForm.reset()
          this.listUsers()
        })
  }

  //DELETE deleta um usuario pelo ID
  delete(user: User){
    this.userService.deletar(user.id).subscribe({
      next: (response) => 
        this.listUsers()
    })
  }

  //PATCH atualiza apenas a permissão pelo ID
  elevate(user: User){
    console.log(user)
    this.userService
      .elevarPermission(user.id)
        .subscribe({
          next: (userElevated) => {
            user.updatedAt = userElevated.updatedAt
            this.listUsers()
          }
        })
  }
}
