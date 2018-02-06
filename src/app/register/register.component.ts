import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {MediaService} from '../services/media.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  user = new User('', '', '');

  constructor(private mediaService: MediaService, private router: Router) {
  }
  register() {
    console.log(this.user);
    this.mediaService.newUser(this.user).subscribe(response => {
      console.log(response);
      this.router.navigate(['login']);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
