import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from '../../model/User'
import { UsersService } from '../../service/users.service';
import { AuthService } from 'src/app/service/auth.service';
import { UserLogin } from 'src/app/model/UserLogin';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from 'src/app/service/alerts.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['../../css/app.component.scss']
})
export class UsersComponent implements OnInit{
  users: User[] = [];
  user: User = new User();
  userToFind: User = new User();
  userToEdit: User = new User();
  loggins: UserLogin[] = [];
  hideDefaultUser: boolean = true;
  
  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alerts: AlertsService
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

  editUserForm: FormGroup = new FormGroup({
    editFirstname: new FormControl(),
    editLastname: new FormControl(),
    editProfileImgUrl: new FormControl()
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

  setFoundedUser(foundedUser: User){
    this.user.id = foundedUser.id;
    this.user.firstName = foundedUser.firstName;
    this.user.lastName = foundedUser.lastName;
    this.user.email = foundedUser.email;
    this.user.profileImgUrl = foundedUser.profileImgUrl;
  }

  setEditUser(username: string){
    this.userService
      .adminGetUserByUsername(username)
      .subscribe(
        respUser => {
          this.userToEdit.id = respUser.id;
          this.userToEdit.firstName = respUser.firstName;
          this.userToEdit.lastName = respUser.lastName;
          this.userToEdit.email = respUser.email;
          this.userToEdit.profileImgUrl = respUser.profileImgUrl;
        }
      )
  }

  updateEditedUser(){
    this.userService.updateUser(this.userToEdit)
      .subscribe(
        respUser => {
          this.setFoundedUser(respUser)
          if (respUser.id == environment.id){
            environment.firstName=respUser.firstName
            environment.lastName=respUser.lastName
            environment.profileImg=respUser.profileImgUrl
          }
          this.hideDefaultUser=true;
          this.resetPage()
          this.alerts.showAlertSuccess("Usuario atualizado!")
        }
      )
  }

  findUser(){
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
          this.hideDefaultUser=false;
        }
      )
  }

  isDefaultUserHided(){
    let ok:boolean = false
    if (this.hideDefaultUser == true){
      return ok=false
    } else {
      return ok=true
    }
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
