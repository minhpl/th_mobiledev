import { Component, OnInit } from '@angular/core';
import Swiper, { Pagination, SwiperOptions } from 'swiper';

import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  public swiperConfig: SwiperOptions = {
    pagination:true,
    slidesPerView: 1.3,
    spaceBetween: 30,
    scrollbar: { draggable: true },
  };
  constructor() { }

   // eslint-disable-next-line @typescript-eslint/member-ordering
   ios = {
    // slidesPerView: 1.5,
    // centered: true,
    slidesPerView: 1.5,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering
  ioss = {
    slidesPerView: 1.5,
    centered: true,
  };

  ngOnInit() {
    Swiper.use([Pagination]);
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
    {
      price: '399.000đ',
      priceold: '500.000đ',
      img: './../../../assets/images/card1.png',
      btn: 'Mua'
    },
    {
      price: '399.000đ',
      priceold: '500.000đ',
      img: './../../../assets/images/card1.png',
      btn: 'Mua'
    },
    {
      price: '399.000đ',
      priceold: '500.000đ',
      img: './../../../assets/images/card1.png',
      btn: 'Mua'
    },
    {
      price: '399.000đ',
      priceold: '500.000đ',
      img: './../../../assets/images/card1.png',
      btn: 'Mua'
    },
  ];

  // eslint-disable-next-line @typescript-eslint/member-ordering
  dataForCard2 = [
    {
      img: './../../../assets/images/Rectangle1.png',
    },
    {
      img: './../../../assets/images/Rectangle2.png',
    },
    {
      img: './../../../assets/images/Rectangle3.png',
    },
    {
      img: './../../../assets/images/Rectangle3.png',
    },
    {
      img: './../../../assets/images/Rectangle3.png',
    },
    {
      img: './../../../assets/images/Rectangle3.png',
    },
    {
      img: './../../../assets/images/Rectangle3.png',
    },
  ];
}
