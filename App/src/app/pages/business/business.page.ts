import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  // page1(login) {
  //   this.router.navigate([ login ]);
  // }

}
