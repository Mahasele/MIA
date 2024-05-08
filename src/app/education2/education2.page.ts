import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education2',
  templateUrl: './education2.page.html',
  styleUrls: ['./education2.page.scss'],
})
export class Education2Page implements OnInit {
  tips: { title: string, content: string }[] = [];
  tipTitle: string = '';
  tipContent: string = '';

  constructor() { }

  ngOnInit() {
    this.tips = [
      { title: 'Tip 1', content: 'This is a tip for users.' },
      { title: 'Tip 2', content: 'Another tip for users.' }
    ];
  }

  postTip() {
    if (this.tipTitle && this.tipContent) {
      this.tips.unshift({ title: this.tipTitle, content: this.tipContent });
      this.tipTitle = '';
      this.tipContent = '';
    }
  }
}