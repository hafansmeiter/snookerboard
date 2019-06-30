import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'foul-selection-box',
  templateUrl: './foul-selection-box.component.html',
  styleUrls: ['./foul-selection-box.component.css']
})
export class FoulSelectionBoxComponent implements OnInit {

  foulTriggered: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  foulSelected(score: number) {
    this.foulTriggered.emit(score);
  }

}
