import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  submit(){
    /*console.log(this.userForm.value)
    const userToSave: User = {...this.userForm.value}
    this.userService
        .salvar(userToSave)
        .subscribe(savedUser => {
          this.users.push(userToSave)
          this.userForm.reset()
          this.listUsers()
        })*/
  }
}
