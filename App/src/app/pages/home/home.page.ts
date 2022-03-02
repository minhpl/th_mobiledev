import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  ios = {
    slidesPerView: 1.5,
    centered: true,
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering
  ioss = {
    slidesPerView: 3,
    centered: true
  };

  ngOnInit() {
  }

}
