import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor() { }

   // eslint-disable-next-line @typescript-eslint/member-ordering
   ios = {
    slidesPerView: 1.5,
    centered: true,
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering
  ioss = {
    slidesPerView: 1.5,
    centered: true,
    // coverflowEffect: {
    //   rotate: 150,
    //   stretch: 10,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: true,
    // },
  };

  ngOnInit() {
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  dataForCard: any = [
    {
      price: '399.000đ',
      priceold: '500.000đ',
      img: './../../../assets/images/card1.png',
      btn: 'Mua'
    },
    {
      price: '399.000đ',
      priceold: '500.000đ',
      img: './../../../assets/images/card2.png',
      btn: 'Mua'
    },
  ];

  // eslint-disable-next-line @typescript-eslint/member-ordering
  dataForCard2: any = [
    {
      img: './../../../assets/images/Rectangle1.png',
    },
    {
      img: './../../../assets/images/Rectangle2.png',
    },
    {
      img: './../../../assets/images/Rectangle3.png',
    },
  ];
}
