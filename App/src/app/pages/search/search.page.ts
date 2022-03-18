import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  cons = [
    {id:1 , name:'huy'},
    {id:2 , name:'ha'},
    {id:3 , name:'hung'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
