import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
/*import {RegFormDetail} from './components/regform.component';*/

export interface RegFormList {
  email: string;
  password: any;
  name: string;
  gender: string;
  dob: Date;
  address: string;
  country: string;
  contact: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = '2018 Enrollment Registration Form';
  model = null;


ngOnInit () {
/*  this.model = new regUser('','','','','','',null,'','MY','', 0, '');
/*
this.userService.getAllReviews()
  .subscribe(result => {
    this.reviews = result;
  });*/
}
  /*RegFormUpdated: RegFormList[] = [

    {email: 'email'
    },
  ] ;
  @Input()

  email: [] = [];

  @Output()
  RegFormUpdated = new EventEmitter();

  regformrecord (email: RegFormDetail) {
    console.log ('>>> Email: ', email);
    this.regformrecord.push(email);
    console.log ('>>> Item Added : ', this.regformrecord);
    this.RegFormUpdated.emit(this.regformrecord);*/
  }

