import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Login} from '../models/login';
import {Media} from '../models/media';

@Injectable()
export class MediaService {

  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  isLogged = false;

  constructor(private http: HttpClient, private router: Router) {
  }


  getNew() {
    return this.http.get(this.apiUrl + '/media?limit=10');
  }
  getSingle(id) {
    return this.http.get<Media>(this.apiUrl + '/media/' + id);
  }
  getUser(user_id, token) {
    const options = {
      headers: new HttpHeaders().set('x-access-token', token),
    };
    return this.http.get(this.apiUrl + '/users/' + user_id, options);
  }

  getAllMedia() {
    return this.http.get(this.apiUrl + '/media');
  }
  newUser(user) {
    return this.http.post(this.apiUrl + '/users', user);
  }
  login(user) {
    this.http.post<Login>(this.apiUrl + '/login', user).subscribe(response => {
      // toimii
      console.log(response);
      localStorage.setItem('token', response.token);
      this.router.navigate(['front']);
    }, (error: HttpErrorResponse) => {
        // ei toimi
        this.router.navigate(['login']);
        console.log('Login failed ' + error.name + ' ' + error.message);
    });
  }
  getUserData (token) {
    const options = {
      headers: new HttpHeaders().set('x-access-token', token),
    };
    return this.http.get(this.apiUrl + '/users/user', options);
  }

  sendFile (token, file) {
    const options = {
      headers: new HttpHeaders().set('x-access-token', token),
    };
    return this.http.post( this.apiUrl + '/media', file, options);
  }

}
