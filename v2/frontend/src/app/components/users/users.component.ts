import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from '../../model/User'
import { UsersService } from '../../service/users.service';
import { AuthService } from 'src/app/service/auth.service';
import { UserLogin } from 'src/app/model/UserLogin';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['../../css/app.component.scss']
})
export class UsersComponent implements OnInit{
  users: User[] = [];
  user: User = new User();
  userToFind: User = new User();
  loggins: UserLogin[] = [];
  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.setDefaultUser()
    this.listAllUsersLogged()
    this.listAllUsers()
  }
  //Manipulador de formularios para validar campos
  userForm: FormGroup = new FormGroup({
    username : new FormControl('user', [Validators.required]),
    password : new FormControl('pass', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
  })

  findUserForm: FormGroup = new FormGroup({
    findUsername: new FormControl('', [Validators.required])
  })

  resetPage(){
    this.router.navigate(['./'], {
      relativeTo: this.route
    })
  }

  setDefaultUser(){
    this.user.id = environment.id;
    this.user.firstName = environment.firstName;
    this.user.lastName = environment.lastName;
    this.user.email = environment.username;
    this.user.profileImgUrl = environment.profileImg;
  }

  findUser(){
    let findUsername: string = {...this.findUserForm.value}
    console.log(findUsername)
    console.log(findUsername[0])
    console.log(findUsername.valueOf())
    console.log(this.userToFind.email)
    this.userService
      .adminGetUserByUsername(this.userToFind.email)
      .subscribe(
        respUser => {
          console.log(respUser)
          this.user.id = respUser.id;
          this.user.firstName = respUser.firstName;
          this.user.lastName = respUser.lastName;
          this.user.email = respUser.email;
          this.user.profileImgUrl = respUser.profileImgUrl;
        }
      )
  }

  //GET traz todos os registros
  listAllUsers(){
    this.userService.adminGetAllUsers().subscribe(
      userList => {
        this.users = userList
      })
  }

  listAllUsersLogged(){
    this.authService.adminGetAllUsersLogged().subscribe(
      logginList => {
        this.loggins = logginList;
      }
    )
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
          this.listAllUsers()
        })
  }

  //DELETE deleta um usuario pelo ID
  delete(user: User){
    this.userService.deletar(user.id).subscribe({
      next: (response) => 
        this.listAllUsers()
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
            this.listAllUsers()
          }
        })
  }
}
