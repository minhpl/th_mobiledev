import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.page.html',
  styleUrls: ['./branch.page.scss'],
})
export class BranchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  dataForCard: any = [
    {
      title: 'Chăm sóc cơ thể',
      // eslint-disable-next-line max-len
      subtitle: 'Ngay bây giờ, chúng ta hãy chủ động nâng cao kiến thức,chủ động chăm sóc cơ thể để mỗi người đều có thể...bác sĩ của chính mình',
      span: '45 khóa học'
    },
    {
      title: 'Ngũ tạng',
      // eslint-disable-next-line max-len
      subtitle: 'Ngay bây giờ, chúng ta hãy chủ động nâng cao kiến thức,chủ động chăm sóc cơ thể để mỗi người đều có thể...bác sĩ của chính mình',
      span: '30 khóa học'
    },
    {
      title: 'Dưỡng sinh',
      // eslint-disable-next-line max-len
      subtitle: 'Ngay bây giờ, chúng ta hãy chủ động nâng cao kiến thức,chủ động chăm sóc cơ thể để mỗi người đều có thể...bác sĩ của chính mình',
      span: '29 khóa học'
    },
    {
      title: 'Dưỡng sinh',
      // eslint-disable-next-line max-len
      subtitle: 'Ngay bây giờ, chúng ta hãy chủ động nâng cao kiến thức,chủ động chăm sóc cơ thể để mỗi người đều có thể...bác sĩ của chính mình',
      span: '29 khóa học'
    },
  ];


}
