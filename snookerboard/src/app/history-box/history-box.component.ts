import { Component, Input, OnInit } from '@angular/core';
import { History } from '../model/history';

@Component({
  selector: 'history-box',
  templateUrl: './history-box.component.html',
  styleUrls: ['./history-box.component.css']
})
export class HistoryBoxComponent implements OnInit {

  @Input() history: History;

  constructor() { }

  ngOnInit() {
  }

}
