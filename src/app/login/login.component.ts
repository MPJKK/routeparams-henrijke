import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MediaService} from '../services/media.service';
import {User} from '../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User('', '' , '');

  constructor(private mediaService: MediaService, private router: Router) { }
/*
  login() {
    console.log(this.user);
    this.mediaService.login(this.user).subscribe(response => {
      console.log(response);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }
  */
  login () {
    this.mediaService.login(this.user);
    console.log(this.user.username + ' ' + this.user.password);
  }

  ngOnInit() {
    if (localStorage.getItem('token') !== null) {
      this.mediaService.getUserData(localStorage.getItem('token')).subscribe(response => {
        this.mediaService.isLogged = true;
        console.log(response);
        this.router.navigate(['front']);
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
    }
  }

}
