import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  // eslint-disable-next-line @typescript-eslint/member-ordering
  // eslint-disable-next-line max-len
  text = 'Khi tham gia vào khóa học chúng ta sẽ được lĩnh hội khi tham gia vào khóa học chúng ta sẽ được lĩnh hội khi tham gia vào khóa học chúng ta sẽ được lĩnh hội';

  constructor() { }

  ngOnInit(): void {
  };

  onClick() {
      // eslint-disable-next-line max-len
      this.text = 'Khi tham gia vào khóa học chúng ta sẽ được lĩnh hội khi tham gia vào khóa học chúng ta sẽ được lĩnh hội khi tham gia vào khóa học chúng ta sẽ được lĩnh hội ';
  };

  onClick2() {
    this.text = '';
    // eslint-disable-next-line max-len
    this.text = 'Đoạn văn 2 khi tham gia vào khóa học chúng ta sẽ được lĩnh hội khi tham gia vào khóa học chúng ta sẽ được lĩnh hội khi tham gia vào khóa học chúng ta sẽ được lĩnh hội ';
  };

  onClick3() {
    this.text = '';
    // eslint-disable-next-line max-len
    this.text = 'Đoạn văn 3 khi tham gia vào khóa học chúng ta sẽ được lĩnh hội khi tham gia vào khóa học chúng ta sẽ được lĩnh hội khi tham gia vào khóa học chúng ta sẽ được lĩnh hội ';
}
}
