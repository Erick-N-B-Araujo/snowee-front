import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UsersService } from './users.service' 
import { User } from './user'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  mensagem: string ='inhain keralhom';
  users: User[] = []
  constructor( private userService: UsersService){
  }

  ngOnInit(){
      this.listUsers()
  }

  userForm: FormGroup = new FormGroup({
    username : new FormControl('user', [Validators.required]),
    password : new FormControl('pass', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
  })

  listUsers(){
    this.userService.listar().subscribe(
      userList => {
        console.log(userList)
        this.users = userList
      })
  }

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

  delete(user: User){
    this.userService.deletar(user.id).subscribe({
      next: (response) => 
        this.listUsers()
    })
  }

  elevate(user: User){
    console.log(user)
    this.userService
      .elevarPermission(user.id)
        .subscribe({
          next: (userElevated) => {
            user.admin = userElevated.admin
            user.updatedAt = userElevated.updatedAt
            this.listUsers()
          }
        })
  }
}
