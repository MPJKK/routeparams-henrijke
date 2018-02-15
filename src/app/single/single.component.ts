import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  fileSuper ;
  userName ;
  constructor( private route: ActivatedRoute, public mediaService: MediaService) { }
   /* whatType(type){}
  */
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.fileSuper = params;
      console.log(params.param);
      this.mediaService.getSingle(params.param).subscribe( (value) => {
        this.fileSuper = value;
        console.log('vlauen tiedot');
        console.log(value);

        this.mediaService.getUser(value.user_id, localStorage.getItem('token')).subscribe((volue) => {
          console.log(volue);
          this.userName = volue.username;
        });

      });
    });
  }

}
