import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {

  constructor(
  private router: Router,
  route: ActivatedRoute
) {}

  ngOnInit() { }

  processForm(form: NgForm) {
    console.log('form: ', form.value);
    this.router.navigate(['confirm']);
    form.resetForm();
  }

}
