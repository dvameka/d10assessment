import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {


  constructor() { }

  ngOnInit() { }

  processForm(form: NgForm) {
    console.log('form: ', form.value);
    form.resetForm();
  }

}
