import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  constructor(public mediaService: MediaService) { }

  isLoggedIn() {
    if (localStorage.getItem('token') !== null) {
      this.mediaService.getUserData(localStorage.getItem('token')).subscribe(response => {
        console.log(response);
        this.mediaService.isLogged = true;
      }, (error: HttpErrorResponse) => {
        console.log(error);
        this.mediaService.isLogged = false;
        console.log('asdasdasd topbar');

      });
    }
  }
  ngOnInit() {
    this.isLoggedIn();
  }
  }
