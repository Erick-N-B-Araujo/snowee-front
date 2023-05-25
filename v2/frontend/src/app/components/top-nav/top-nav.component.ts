import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from '../../model/User'
import { UsersService } from '../../service/users.service';
import { AuthService } from 'src/app/service/auth.service';
import { UserLogin } from 'src/app/model/UserLogin';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from 'src/app/service/alerts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['../../css/app.component.scss']
})

export class TopNavComponent implements OnInit {

  public cont=0;
  public name: string=environment.firstName;
  public profileImg: string=environment.profileImg;
  userToEdit: User = new User();
  clickEventsubscription: Subscription = new Subscription();
  user: User = new User();

  editUserForm: FormGroup = new FormGroup({
    editFirstname: new FormControl(),
    editLastname: new FormControl(),
    editProfileImgUrl: new FormControl()
  })

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private alerts: AlertsService,
    public auth: AuthService
  ){
    this.clickEventsubscription=this.auth.getClickEvent().subscribe(()=>{
      this.setLoggedUser();
      })
  }
  
  ngOnInit() {
    window.scroll(0,0)
    this.user.id = environment.id
    this.user.firstName = environment.firstName
    this.user.lastName = environment.lastName
    this.user.profileImgUrl = environment.profileImg
    this.user.email = environment.username
    console.log(this.user)
  }

  

  setLoggedUser(){
    if (this.cont==0) {
      this.user.id = environment.id
      this.user.firstName = environment.firstName
      this.user.lastName = environment.lastName
      this.user.profileImgUrl = environment.profileImg
      this.user.email = environment.username
      this.setUserToEdit(this.user)
      this.cont = this.cont + 1
    }
  }

  setUserToEdit(user: User){
    this.userToEdit.id = user.id;
    this.userToEdit.firstName = user.firstName;
    this.userToEdit.lastName = user.lastName;
    this.userToEdit.email = user.email;
    this.userToEdit.profileImgUrl = user.profileImgUrl;
  }

  updateEditedUser(){
    this.userService.updateUser(this.userToEdit)
      .subscribe(
        respUser => {
          environment.firstName=respUser.firstName;
          environment.lastName=respUser.lastName;
          environment.profileImg=respUser.profileImgUrl;
          //document.getElementById("close-modal")?.click;
          this.setLoggedUser()
          this.alerts.showAlertSuccess("Usuario atualizado!")
        }
      )
  }
}
